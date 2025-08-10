import NeonParticles from '../components/NeonParticles'
import ThemeToggle from '../components/ThemeToggle'
import NeonLogo from '../components/NeonLogo'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <NeonParticles />
      <ThemeToggle />
      <NeonLogo />

      <main className="min-h-screen flex flex-col justify-center items-center gap-8 px-4 text-center">
        <h1 className="neon-text text-5xl font-extrabold mb-12">exmadeW</h1>

        <Button href="/methods" glass={false}>
          Methods
        </Button>

        <Button
          href="https://discord.gg/skDSzwCScu"
          external
          glass={true}
          className="flex items-center justify-center gap-2"
        >
          <img
            src="/discord-blue-logo.svg"
            alt="Discord Logo"
            className="w-6 h-6"
            draggable={false}
          />
          Our Discord
        </Button>
      </main>
    </>
  )
}
