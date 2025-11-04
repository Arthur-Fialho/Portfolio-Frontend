// import Header from './components/Header';
// import EducationSection from './components/EducationSection';
// import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import BooksSection from './components/BooksSection';
import { KleverProvider } from '@klever/connect-react';
import TransferKLVSection from './components/TransferKLVSection';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      
      
      <main>
        <KleverProvider
              config={{
                network: 'testnet',
                autoConnect: true,
                reconnectOnMount: true,
                debug: true,
              }}
            >
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
              <BooksSection />
              <TransferKLVSection />
            </KleverProvider>
      </main>

      <Footer />
    </div>
  )
}

export default App;