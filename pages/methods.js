import NeonParticles from '../components/NeonParticles'
import ThemeToggle from '../components/ThemeToggle'
import NeonLogo from '../components/NeonLogo'
import Button from '../components/Button'

export default function Methods() {
  return (
    <>
      <NeonParticles />
      <ThemeToggle />
      <NeonLogo />

      <main className="min-h-screen flex flex-col justify-center items-center gap-6 px-4 text-center">
        <h1 className="neon-text text-4xl font-bold mb-10">Methods</h1>

        <Button href="https://app.splunk.gg/u/exmadeGG" external glass={false}>
          Splunk
        </Button>

        <Button href="https://www.logged.tg/auth/exmade" external glass={false}>
          Injuries
        </Button>

        <Button href="https://app.splunk.gg/u/exmadeGG" external glass={false}>
          Cookie Bypasser
        </Button>

        <Button href="https://dsprs.vercel.app/hyperlink" external glass={false}>
          Hyperlink Gen
        </Button>
      </main>
    </>
  )
}
