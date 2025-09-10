export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
            © 2024 Alex Johnson. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground" data-testid="footer-tech">
            Built with React and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
