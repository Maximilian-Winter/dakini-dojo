// @ts-ignore
import Link from 'next/link';

const navLinks = [
  { name: "Entrance Hall", href: "/" },
  { name: "Training Halls", href: "/training-halls" },
  { name: "Expression Hall", href: "/hall-of-expression" },
  { name: "Community", href: "/community" },
  { name: "Temple Courtyard", href: "/courtyard" },
  { name: "Inner Sanctum", href: "/inner-sanctum" },
  { name: "Library", href: "/resource-library" },
  { name: "Developer's Corner", href: "/developers-corner" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-stone shadow-lg">
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-bamboo">
          <h2 className="text-2xl font-semibold text-bamboo">🌟 Dakini Dojo</h2>
        </div>
        <nav className="flex-1 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-2 hover:bg-sage hover:bg-opacity-20 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
