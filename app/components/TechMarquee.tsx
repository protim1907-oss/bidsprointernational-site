const TECH = [
  "React Native",
  "TypeScript",
  "Node.js / NestJS",
  "Next.js",
  "React",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Kafka",
  "Redis",
  "Terraform",
  "Tailwind CSS",
  "Drupal 10",
  "Datadog",
];

/**
 * Full-bleed, auto-scrolling strip of the technologies used across our builds.
 * The list is rendered twice so the CSS marquee can loop seamlessly.
 */
export default function TechMarquee() {
  return (
    <div className="bp-marquee py-6">
      <div className="bp-marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-10 px-5"
            aria-hidden={copy === 1}
          >
            {TECH.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
