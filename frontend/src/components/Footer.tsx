export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 px-4 sm:px-8 text-center">
      <p className="text-neutral-600 text-sm mb-1">
        Diseñado y construido por{' '}
        <span className="text-neutral-400 font-medium">Ho Sung Choi</span>
      </p>
      <div className="flex items-center justify-center gap-4 text-xs text-neutral-700">
        <a href="mailto:choihosung23@gmail.com" className="hover:text-neutral-400 transition-colors">choihosung23@gmail.com</a>
        <span>·</span>
        <a href="https://wa.me/50249331504" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">+502 4933 1504</a>
        <span>·</span>
        <a href="https://github.com/HoSung23" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-400 transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
