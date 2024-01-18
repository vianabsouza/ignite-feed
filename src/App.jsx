import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/vianabsouza.png",
      name: "Barbara Viana",
      role: "Web developer",
    },
    content: [
      { id: 2, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 3,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 4, type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-15 10:00:00"),
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator",
    },
    content: [
      { id: 5, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 6,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 7, type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-17 10:00:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
