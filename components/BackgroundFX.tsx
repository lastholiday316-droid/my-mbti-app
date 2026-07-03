export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl animate-blob" />
      <div
        className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
    </div>
  );
}
