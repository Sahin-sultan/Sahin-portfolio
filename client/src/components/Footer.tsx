export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 glass-card-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-sm text-muted-foreground text-center" data-testid="footer-copyright">
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Crafted by</span> <span style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.1rem', fontWeight: '600', color: '#60a5fa' }}>Sahin Sultan</span> | <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '500' }}>© 2025</span>
          </div>
          <div className="text-sm text-muted-foreground text-center" data-testid="footer-tech">
            <span style={{ fontFamily: 'Josefin Sans, sans-serif', letterSpacing: '0.5px' }}>Built with React and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
