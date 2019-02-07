import React from "react";
import { Header, Divider, Image, Grid, Segment } from "semantic-ui-react";
import Layout from "../components/layout";
import project from "../../static/dota.png";
import ReactPlayer from "react-player";

const Projects = props => (
  <Layout location={props.location}>
    <Header as="h2" textAlign="left">
      <Header.Content>Projects</Header.Content>
    </Header>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header textAlign="center">
          <Header.Content />
        </Header>
        <Image src={project} fluid href="http://acid-scene.surge.sh/" />
        <Segment basic>
          A score Card that displays a short synopsis of a player's overall
          performance. The Card utilizes React, Redux and stats provided by the
          openDota Project.
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Header as="h2" textAlign="left">
          <Header.Content>
            <a
              style={{ color: "rgba(0, 0, 0, 0.87)" }}
              href="http://acid-scene.surge.sh/"
            >
              Dota 2 Score Card
            </a>
          </Header.Content>
        </Header>
        <p style={{ paddingTop: "10px" }}>
          Inspired by the OpenDota Web UI I created a simple scored card for
          viewing Dota 2 data. This utilizes the OpenDota API, which is also an
          open source project. The purpose was to strengthen my react skills and
          learn a bit of redux along the way. The app provides a bite-sized view
          of players recent dota stats.{" "}
        </p>
        <Divider horizontal section>
          Much ado about dota
        </Divider>
        <p>
          Dota is a multiplayer video game in which two teams of five players
          compete to collectively destroy a large structure defended by the
          opposing team known as the "Ancient", whilst defending their own.
        </p>
        <p>
          This game united my friend group through our formative years. I was
          first introduced to the game during a weekend LAN party I had with
          friends. At the time Dota had many shortcomings, this was the time of
          private lobbies, frequent disconnects, and constant map downloads.
          Even with all its hard edges, it united our friend group into one
          focused effort. I can attribute Dota for keeping my friend group
          together when we departed for college. 10 years later we are still
          going strong. It's amazing how far the game has come.
        </p>
        <small>-- Project Last Updated: June 25, 2018</small>
      </Grid.Column>
    </Grid>
    <Divider style={styles.spacer} />
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="left">
          <Header.Content>2016 Video Reel</Header.Content>
        </Header>
        <p style={{ paddingTop: "10px" }}>
          A few years ago I worked for a couple boutique video studios creating
          commercials, music videos and motion graphics. Aside you can find a
          selection of shots from my favorite projects. Since my career switch I
          find myself doing less video content but enjoying it so much more.
        </p>
        <p style={{ paddingTop: "10px" }}>
          In the reel you will find clips from:
        </p>
        <ul>
          <li>A camera product highlight</li>
          <li>A bowling short</li>
          <li>A rock opera</li>
          <li>A rockabilly festival</li>
          <li>A spec medical piece</li>
          <li>A corporate drivers clinic</li>
        </ul>
        <small>-- Reel Last Updated: 2016</small>
      </Grid.Column>
      <Grid.Column>
        <Header textAlign="left">
          <Header.Content />
        </Header>
        <div style={styles.playerWrapper}>
          <ReactPlayer
            style={styles.reactPlayer}
            url="https://vimeo.com/177779267"
            width="100%"
            height="100%"
            muted
          />
        </div>
      </Grid.Column>
    </Grid>
  </Layout>
);

const styles = {
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%"
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0
  },
  spacer: {
    paddingBottom: "20px"
  }
};

export default Projects;
