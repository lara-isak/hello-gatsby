import React from 'react'
import Layout from '../components/layout'
import moodify from "../images/moodify_music_app.png"
import color_game from "../images/guess_the_color_game.png"

const ProjectsPage = () => {
  return (
    <div>
      <Layout>
        <h2>Projects</h2>
        <p>Here you can find a few handpicked, personal projects which I'm the most proud of.</p>
        <p>If you want to check out the rest, head on over to my <a href="https://github.com/lara-isak" target="_blank" rel="noreferrer">Github page.</a></p>

        <h3>moodify</h3>
        <p>Web app for searching Spotify playlists based on your mood</p>
        <a href="https://moodify-webapp.herokuapp.com/" target="_blank" rel="noreferrer"><img src={moodify} alt="Moodify Music App"/></a>

        <h3>guess-the-color</h3>
        <p>Test your RGB color codes knowledge by playing this fun game</p>
        <a href="https://lara-isak.github.io/guess-the-color/" target="_blank" rel="noreferrer"><img src={color_game} alt="Guess The Color Game"/></a>
      </Layout>
    </div>
  )
}

export default ProjectsPage