import { useEffect, useState } from "react";

export default function GitHub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/dhruvaggarwal1234"),
      fetch("https://api.github.com/users/dhruvaggarwal1234/repos?sort=stars&per_page=6"),
    ])
      .then(async ([userRes, repoRes]) => {
        if (!userRes.ok || !repoRes.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        setUser(userData);
        setRepos(repoData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-lg font-semibold">
        Loading GitHub profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-36 h-36 rounded-full border-4 border-orange-500"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              {user.name || "GitHub User"}
            </h2>
            <p className="text-gray-500">@{user.login}</p>

            {user.bio && (
              <p className="mt-4 text-gray-600">{user.bio}</p>
            )}

            {/* EXTRA INFO */}
            <div className="mt-4 text-sm text-gray-500 space-y-1">
              {user.location && <p>📍 {user.location}</p>}
              {user.company && <p>🏢 {user.company}</p>}
              <p>🗓 Joined {new Date(user.created_at).toDateString()}</p>
            </div>

            {/* STATS */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-6">
              <Stat label="Followers" value={user.followers} />
              <Stat label="Following" value={user.following} />
              <Stat label="Repositories" value={user.public_repos} />
            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        {/* REPOSITORIES */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Top Repositories
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* STAT COMPONENT */
function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

/* REPO CARD */
function RepoCard({ repo }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <h4 className="font-semibold text-lg text-gray-900 mb-2">
        {repo.name}
      </h4>

      {repo.description && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {repo.description}
        </p>
      )}

      <div className="flex justify-between text-sm text-gray-500">
        <span>⭐ {repo.stargazers_count}</span>
        {repo.language && <span>{repo.language}</span>}
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-orange-600 font-medium hover:underline"
      >
        View Repo →
      </a>
    </div>
  );
}
