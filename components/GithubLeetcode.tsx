import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { githubStats, leetcodeStats, profile } from "@/data/content";

export default function GithubLeetcode() {
  return (
    <section id="github" className="py-28 md:py-36 bg-bg-elev border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-4">Coding Profiles</div>
        <Reveal>
          <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-4">
            GitHub &amp; LeetCode
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-muted max-w-xl mb-14 text-[16.5px]">
            A live look at where the code lives and how I practice problem-solving.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub */}
          <Reveal>
            <div className="bg-bg border border-line rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-[9px] bg-bg-elev-2 border border-line flex items-center justify-center">
                  <FiGithub size={18} />
                </div>
                <h3 className="text-white text-lg font-medium">GitHub</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <StatBox n={githubStats.repoCount} l="Repos" />
                <StatBox n={githubStats.stars} l="Stars" />
                <StatBox n={githubStats.languages.length} l="Languages" />
              </div>

              <div className="h-2 rounded-md overflow-hidden flex mb-2.5">
                {githubStats.languages.map((l) => (
                  <div key={l.name} style={{ width: `${l.pct}%`, background: l.color }} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3.5 text-[12.5px] text-muted mb-5">
                {githubStats.languages.map((l) => (
                  <span key={l.name} className="flex items-center gap-1.5">
                    <i className="w-2 h-2 rounded-full inline-block" style={{ background: l.color }} />
                    {l.name}
                  </span>
                ))}
              </div>

              <div>
                {githubStats.repos.map((r) => (
                  <div
                    key={r.name}
                    className="flex justify-between items-center py-3 border-b border-line last:border-b-0 text-sm"
                  >
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-cyan transition-colors">
                      {r.name}
                    </a>
                    <span className="font-mono text-xs text-muted flex items-center gap-1.5">
                      <i className="w-2 h-2 rounded-full inline-block" style={{ background: r.color }} />
                      {r.lang}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] font-semibold border border-line-strong px-3.5 py-2 rounded-lg hover:border-cyan hover:text-cyan transition-colors inline-flex"
                >
                  View full profile ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* LeetCode */}
          <Reveal delay={0.08}>
            <div className="bg-bg border border-line rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-[9px] bg-bg-elev-2 border border-line flex items-center justify-center text-[#ffa116]">
                  <SiLeetcode size={18} />
                </div>
                <h3 className="text-white text-lg font-medium">LeetCode</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <StatBox n={leetcodeStats.solved} l="Solved" />
                <StatBox n={leetcodeStats.rank} l="Rank" format="rank" />
                <StatBox n={leetcodeStats.badges} l="Badges" />
              </div>

              <p className="text-muted text-[13.5px] mb-1.5">
                Problem-solving practice across data structures &amp; algorithms —{" "}
                <strong className="text-text">{leetcodeStats.note}</strong>.
              </p>

              <div className="flex flex-wrap gap-2 mt-3.5">
                {leetcodeStats.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11.5px] px-2.5 py-1.5 rounded-md bg-bg-elev-2 border border-line text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-4 p-3.5 border border-line rounded-xl bg-bg-elev-2">
                <div className="w-10 h-10 rounded-full bg-grad flex items-center justify-center flex-shrink-0 text-lg">
                  🏅
                </div>
                <div>
                  <h4 className="text-sm text-white font-medium">{leetcodeStats.badgeName}</h4>
                  <p className="text-[12.5px] text-muted">Most recent LeetCode badge earned</p>
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] font-semibold border border-line-strong px-3.5 py-2 rounded-lg hover:border-cyan hover:text-cyan transition-colors inline-flex"
                >
                  View full profile ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatBox({ n, l, format }: { n: number; l: string; format?: "rank" }) {
  return (
    <div className="text-center bg-bg-elev-2 border border-line rounded-[10px] py-4 px-2">
      <div className="font-head text-2xl text-white font-bold">
        <AnimatedCounter target={n} format={format} />
      </div>
      <div className="text-[11px] text-muted font-mono uppercase mt-1">{l}</div>
    </div>
  );
}
