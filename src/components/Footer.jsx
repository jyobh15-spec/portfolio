export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-6 px-6 text-center">
      <p className="text-white/40 text-sm">
        &copy; {new Date().getFullYear()} Jyoti Bhatt. All rights reserved.
      </p>
    </footer>
  )
}
