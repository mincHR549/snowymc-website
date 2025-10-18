export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/10 border-t border-white/20 text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} SnowyMC 团队 — Powered by Vercel</p>
          <div className="space-x-4 text-sm">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:underline">Discord</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
