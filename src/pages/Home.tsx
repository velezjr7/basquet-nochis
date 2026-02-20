import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Users, Star, Activity, ExternalLink } from "lucide-react";
import { LeagueData, LeagueCategory } from "../types";
import LeagueSection from "../components/LeagueSection";

// Import data
import {
  teams as teamsFemenil,
  matches as matchesFemenil,
} from "../data/femenil";
import { teams as teamsMixta, matches as matchesMixta } from "../data/mixta";
import {
  teams as teamsJuvenil,
  matches as matchesJuvenil,
} from "../data/juvenil";

const leagues: LeagueData[] = [
  {
    id: "femenil",
    name: "Liga Juvenil Femenil",
    category: "femenil",
    teams: teamsFemenil,
    matches: matchesFemenil,
  },
  {
    id: "juvenil",
    name: "Liga Juvenil Varonil",
    category: "juvenil",
    teams: teamsJuvenil,
    matches: matchesJuvenil,
  },
  // {
  //   id: "mixta",
  //   name: "Liga Mixta",
  //   category: "mixta",
  //   teams: teamsMixta,
  //   matches: matchesMixta,
  // },
];

const THEME_COLORS: Record<LeagueCategory, string> = {
  femenil: "bg-pink-500",
  mixta: "bg-violet-600",
  juvenil: "bg-blue-500",
};

const TEXT_COLORS: Record<LeagueCategory, string> = {
  femenil: "text-pink-600",
  mixta: "text-violet-600",
  juvenil: "text-blue-600",
};

const BORDER_COLORS: Record<LeagueCategory, string> = {
  femenil: "border-pink-500",
  mixta: "border-violet-600",
  juvenil: "border-blue-500",
};

const ICONS: Record<LeagueCategory, React.ReactNode> = {
  femenil: <Star size={18} />,
  mixta: <Activity size={18} />,
  juvenil: <Users size={18} />,
};

const Home: React.FC = () => {
  const [activeLeagueId, setActiveLeagueId] = useState<string>(leagues[0].id);

  const activeLeague =
    leagues.find((l) => l.id === activeLeagueId) || leagues[0];
  const activeTheme = THEME_COLORS[activeLeague.category];
  const activeText = TEXT_COLORS[activeLeague.category];
  const activeBorder = BORDER_COLORS[activeLeague.category];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg ${activeTheme} text-white transition-colors duration-300`}>
                <Trophy size={24} />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Basquetbol{" "}
                <span
                  className={`font-black ${activeText} transition-colors duration-300`}>
                  Nochis
                </span>
              </h1>
            </div>

            {/* Desktop Tabs */}
            <nav className="hidden md:flex space-x-1">
              {leagues.map((league) => {
                const isActive = activeLeagueId === league.id;
                const theme = THEME_COLORS[league.category];
                const text = TEXT_COLORS[league.category];

                return (
                  <button
                    key={league.id}
                    onClick={() => setActiveLeagueId(league.id)}
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                      ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}
                    `}>
                    <span className={isActive ? text : "text-gray-400"}>
                      {ICONS[league.category]}
                    </span>
                    {league.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme}`}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              <a
                href="https://basketballnochis.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center gap-2">
                <ExternalLink size={18} className="text-gray-400" />
                Liga Varonil
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden border-t border-gray-100 overflow-x-auto">
          <div className="flex px-4 py-2 space-x-2 min-w-max">
            {leagues.map((league) => {
              const isActive = activeLeagueId === league.id;
              const theme = THEME_COLORS[league.category];
              const text = TEXT_COLORS[league.category];
              const border = BORDER_COLORS[league.category];

              return (
                <button
                  key={league.id}
                  onClick={() => setActiveLeagueId(league.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 flex items-center gap-2 whitespace-nowrap
                    ${
                      isActive
                        ? `bg-white ${border} ${text} shadow-sm`
                        : "bg-gray-50 border-transparent text-gray-500"
                    }
                  `}>
                  {ICONS[league.category]}
                  {league.name}
                </button>
              );
            })}

            <a
              href="https://basketballnochis.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium border border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
              <ExternalLink size={18} />
              Liga Varonil
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLeagueId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {activeLeague.name}
              </h2>
              <p className="text-gray-500 mt-1">Temporada Enero - Junio 2026</p>
            </div>

            <LeagueSection league={activeLeague} themeColor={activeTheme} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
