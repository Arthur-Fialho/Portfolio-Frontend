function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-10 px-4 text-center border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm font-semibold tracking-wide">
          &copy; {currentYear} • Arthur Fialho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;