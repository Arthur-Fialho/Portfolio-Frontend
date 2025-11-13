import React from 'react';
import { FaBookOpen, FaHourglassHalf, FaCheckCircle } from 'react-icons/fa';

const booksData = {
  current: [
    {
      title: "Clean Code",
      status: "em progresso",
      link: "https://collshp.com/compresac67?share_channel_code=1&view=storefront"
    }
  ],
  upcoming: [
    {
      title: "Design Patterns",
      link: "https://collshp.com/compresac67?share_channel_code=1&view=storefront"
    },
    {
      title: "Domain Driven Design",
      link: "https://collshp.com/compresac67?share_channel_code=1&view=storefront"
    },
    {
      title: "Cracking the Code Interview",
      link: "https://collshp.com/compresac67?share_channel_code=1&view=storefront"
    }
  ],
  completed: [
    {
      title: "Programador Autodidata",
      link: "https://collshp.com/compresac67?share_channel_code=1&view=storefront"
    },
    {
      title: "Cientista da Computação Autodidata",
      link: "https://mercadolivre.com/sec/1p3nKAB"
    }
    
  ]
};

function BooksSection() {
  return (
    <section id="books" className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-600 dark:text-teal-400">
          Livros
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Leitura Atual */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <FaBookOpen className="text-2xl text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-orange-500">Leitura Atual</h3>
            </div>
            
            <div className="flex justify-center">
              {booksData.current.map((book, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group max-w-sm">
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                        {book.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {book.title}
                    </h4>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Próximas Leituras */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <FaHourglassHalf className="text-2xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-500">Próximas Leituras</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {booksData.upcoming.map((book, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        Na fila
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {book.title}
                    </h4>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Leituras Concluídas */}
          {booksData.completed.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <FaCheckCircle className="text-2xl text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-500">Leituras Concluídas</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {booksData.completed.map((book, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <a 
                      href={book.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center mb-3">
                        <FaCheckCircle className="text-green-500 mr-3" />
                        <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wide">
                          Concluído
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {book.title}
                      </h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mensagem quando não há livros concluídos */}
          {booksData.completed.length === 0 && (
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <FaCheckCircle className="text-2xl text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-500">Leituras Concluídas</h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  📖 Em breve adicionarei os livros que já terminei aqui!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BooksSection;
