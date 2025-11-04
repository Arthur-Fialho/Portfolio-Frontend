import { useState, useEffect } from 'react';
import { useKlever, useTransaction } from '@klever/connect-react';
import { parseUnits } from '@klever/connect-core';

function TransferKLVSection() {
  const { isConnected, address, connect, disconnect } = useKlever();
  const [donationAmount, setDonationAmount] = useState('1');
  const [selectedToken, setSelectedToken] = useState('KLV'); // KLV ou KDA
  const [kdaId, setKdaId] = useState(''); // Para tokens KDA
  const [donationHistory, setDonationHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [walletDetected, setWalletDetected] = useState(false);

  const DONATION_WALLET = 'klv1cvsgug6sntupwrks6xjhfxgsy7qmd8fd08ts2ftqg8nmxwya9h3qnxkpkk';

  // Verificar se a extensão da carteira está disponível
  useEffect(() => {
    const checkWalletExtension = () => {
      // Verificar se existe a extensão Klever no window
      const hasKleverExtension = window.kleverWeb || window.ethereum || window.klever;
      setWalletDetected(!!hasKleverExtension);
    };

    checkWalletExtension();
    
    // Verificar novamente após um pequeno delay caso a extensão demore para carregar
    const timer = setTimeout(checkWalletExtension, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Carregar histórico do localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('klv-donation-history');
    if (savedHistory) {
      setDonationHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Salvar no localStorage quando o histórico mudar
  const saveDonationToHistory = (donation) => {
    const newHistory = [donation, ...donationHistory].slice(0, 10); // Manter apenas as últimas 10 doações
    setDonationHistory(newHistory);
    localStorage.setItem('klv-donation-history', JSON.stringify(newHistory));
  };

  const { sendKLV } = useTransaction({
    onSuccess: (receipt) => {
      console.log('Transaction confirmed:', receipt.hash);
      const donation = {
        id: Date.now(),
        amount: donationAmount,
        token: 'KLV',
        hash: receipt.hash,
        date: new Date().toLocaleString(),
        from: address
      };
      saveDonationToHistory(donation);
      setIsLoading(false);
      alert(`Doação de ${donationAmount} KLV realizada com sucesso!\nHash: ${receipt.hash}`);
    },
    onError: (error) => {
      console.error('Error:', error);
      setIsLoading(false);
      alert(`Erro ao enviar doação: ${error.message}`);
    }
  });

  const { sendKDA } = useTransaction({
    onSuccess: (receipt) => {
      console.log('KDA Transaction confirmed:', receipt.hash);
      const donation = {
        id: Date.now(),
        amount: donationAmount,
        token: kdaId || 'KDA',
        hash: receipt.hash,
        date: new Date().toLocaleString(),
        from: address
      };
      saveDonationToHistory(donation);
      setIsLoading(false);
      alert(`Doação de ${donationAmount} ${kdaId} realizada com sucesso!\nHash: ${receipt.hash}`);
    },
    onError: (error) => {
      console.error('Error:', error);
      setIsLoading(false);
      alert(`Erro ao enviar doação: ${error.message}`);
    }
  });

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const handleDonation = async () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      alert('Por favor, insira um valor válido para a doação');
      return;
    }

    if (selectedToken === 'KDA' && !kdaId.trim()) {
      alert('Por favor, insira o ID do token KDA');
      return;
    }

    try {
      setIsLoading(true);
      
      if (selectedToken === 'KLV') {
        // Enviar KLV para a carteira de doação
        await sendKLV(DONATION_WALLET, Number(parseUnits(donationAmount)));
      } else {
        // Enviar token KDA para a carteira de doação
        await sendKDA(
          DONATION_WALLET,           // Receiver address
          Number(parseUnits(donationAmount)),   // Amount
          kdaId.trim()               // KDA ID
        );
      }
    } catch (error) {
      console.error('Failed to send donation:', error);
      setIsLoading(false);
      alert(`Erro ao enviar doação: ${error.message}`);
    }
  };

  const clearHistory = () => {
    setDonationHistory([]);
    localStorage.removeItem('klv-donation-history');
  };

  // Componente para mostrar quando a carteira não está instalada
  const WalletNotDetected = () => (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Carteira Klever Não Detectada
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base px-2 sm:px-0">
            Para usar este sistema de doações, você precisa ter a extensão da Carteira Klever instalada no seu navegador.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://klever.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar Carteira Klever
          </a>
          
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-2">Disponível para:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="bg-gray-100 dark:bg-gray-600 px-2 sm:px-3 py-1 rounded text-xs">🌐 Chrome</span>
              <span className="bg-gray-100 dark:bg-gray-600 px-2 sm:px-3 py-1 rounded text-xs">🦊 Firefox</span>
              <span className="bg-gray-100 dark:bg-gray-600 px-2 sm:px-3 py-1 rounded text-xs">📱 Mobile App</span>
            </div>
          </div>

          <div className="mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-600">
            <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
              💡 <strong>Dica:</strong> Após instalar a extensão, recarregue esta página para conectar sua carteira.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-teal-600 dark:text-teal-400">
            Sistema de Doações Klever Blockchain
          </h2>
          
          {/* Aviso e Descrição */}
          <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-600 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl mb-2 sm:mb-0 sm:mr-2">⚠️</span>
              <h3 className="text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200 text-center sm:text-left">
                Projeto de Demonstração - Testnet
              </h3>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed text-center sm:text-left">
              Este é apenas um projeto de exemplo rodando na blockchain testnet da Klever. Os tokens KLV/KDA utilizados aqui não possuem valor real.
            </p>
          </div>

          {/* Tokens Aceitos */}
          <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-600 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-800 dark:text-green-200 text-center sm:text-left">
              🪙 Tokens Aceitos
            </h3>
            <div className="space-y-3">
              <p className="text-green-700 dark:text-green-300 text-sm sm:text-base text-center sm:text-left">
                <strong>KLV:</strong> Token nativo da Klever Blockchain
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm sm:text-base text-center sm:text-left">
                <strong>Outros tokens KDA:</strong> KFI, USDT, BUSD, BTC, ETH, e qualquer token criado na rede Klever
              </p>
            </div>
          </div>

          {/* Carteira de Destino */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-8">
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200 text-center">
              🎯 Carteira de Destino das Doações:
            </h4>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
              <code className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 block break-all leading-relaxed font-mono">
                {DONATION_WALLET}
              </code>
            </div>
            {/* Botão para copiar em dispositivos móveis */}
            <div className="mt-3 text-center">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(DONATION_WALLET).then(() => {
                    alert('Endereço da carteira copiado!');
                  }).catch(() => {
                    // Fallback para dispositivos que não suportam clipboard API
                    const textArea = document.createElement('textarea');
                    textArea.value = DONATION_WALLET;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Endereço da carteira copiado!');
                  });
                }}
                className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
              >
                📋 Copiar Endereço
              </button>
            </div>
          </div>
        </div>

        {/* Verificação da carteira */}
        {!walletDetected ? (
          <WalletNotDetected />
        ) : (
          <>
            {/* Botão de Conexão/Desconexão */}
            <div className="text-center mb-6 sm:mb-8">
              {!isConnected ? (
                <button
                  onClick={handleConnect}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  🔗 Conectar Carteira Klever
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-900 border border-teal-200 dark:border-teal-600 rounded-lg p-3 sm:p-4">
                    <p className="text-teal-700 dark:text-teal-300 font-semibold mb-2 text-sm sm:text-base">
                      ✅ Carteira Conectada
                    </p>
                    <p className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 break-all px-2 sm:px-0">
                      {address}
                    </p>
                  </div>
                  <button
                    onClick={handleDisconnect}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                  >
                    🔌 Desconectar Carteira
                  </button>
                </div>
              )}
            </div>

            {/* Sistema de Doação */}
            {isConnected && (
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                  💰 Fazer uma Doação
                </h3>
                
                <div className="max-w-md mx-auto space-y-6">
                  {/* Seleção do Tipo de Token */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center sm:text-left">
                      Tipo de Token:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedToken('KLV');
                          setKdaId(''); // Limpar KDA ID quando selecionar KLV
                        }}
                        className={`px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                          selectedToken === 'KLV'
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                        }`}
                      >
                        🪙 KLV
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedToken('KDA')}
                        className={`px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                          selectedToken === 'KDA'
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                        }`}
                      >
                        🎯 Outros Tokens
                      </button>
                    </div>
                  </div>

                  {/* Campo para KDA ID (apenas quando KDA está selecionado) */}
                  {selectedToken === 'KDA' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center sm:text-left">
                        ID do Token KDA:
                      </label>
                      <input
                        type="text"
                        value={kdaId}
                        onChange={(e) => setKdaId(e.target.value)}
                        placeholder="Ex: KFI, USDT, etc."
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 text-center sm:text-left"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center sm:text-left">
                        Digite o ID do token que deseja enviar (ex: KFI, USDT, etc.)
                      </p>
                    </div>
                  )}

                  {/* Campo de Quantidade */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center sm:text-left">
                      Quantidade de {selectedToken === 'KLV' ? 'KLV' : kdaId || 'tokens'} para doação:
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Ex: 1.5"
                        min="0.01"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 text-center sm:text-left"
                      />
                      <span className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">
                        {selectedToken === 'KLV' ? 'KLV' : kdaId || 'TOKEN'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleDonation}
                    disabled={isLoading || !donationAmount || parseFloat(donationAmount) <= 0 || (selectedToken === 'KDA' && !kdaId.trim())}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processando...
                      </span>
                    ) : (
                      `💝 Doar ${donationAmount} ${selectedToken === 'KLV' ? 'KLV' : kdaId || 'TOKEN'}`
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Histórico de Doações */}
            {isConnected && donationHistory.length > 0 && (
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 text-center sm:text-left">
                    📊 Histórico de Doações
                  </h3>
                  <button
                    onClick={clearHistory}
                    className="text-red-500 hover:text-red-700 text-sm font-medium mx-auto sm:mx-0"
                  >
                    🗑️ Limpar Histórico
                  </button>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {donationHistory.map((donation) => (
                    <div
                      key={donation.id}
                      className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-gray-800"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                        <div className="w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                            <span className="text-base sm:text-lg font-bold text-teal-600 dark:text-teal-400">
                              {donation.amount} {donation.token || 'KLV'}
                            </span>
                            <span className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded w-fit">
                              Enviado
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                            📅 {donation.date}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 break-all leading-relaxed">
                            🔗 Hash: {donation.hash}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default TransferKLVSection;
