import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import headerImage from "../../static/images/teamup.png"
import featureImage from "../../static/images/teammaker-presentantion.gif"
import thumbnailEvent from "../../static/images/1-user-database.png"
import thumbnailBoard from "../../static/images/2-score-analysis.png"
import thumbnailNews from "../../static/images/3-autosort-teams.png"
import thumbnailTeams from "../../static/images/4-the-rules.png"
import thumbnailStaff from "../../static/images/5-stay-alert.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Create and organize hackathon teams. Automatically." />

    <div className={"page-header home"}>
      <img alt={"TeamMaker"} src={headerImage} />
      <h1>
        Create and organize hackathon teams. <strong>Automatically.</strong>
      </h1>
      <p>
        Save your time by letting <strong>TeamMaker</strong> assign your users
        into balanced teams, based on their skills.
      </p>
      <img class="main-image" alt={"Dashboard"} src={featureImage} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={thumbnailEvent} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>User Database</h2>
                <p>
                  TeamMaker has its own user sign up system. Gather all
                  participants in one place. Create your own user database.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Score Analysis</h2>
                <p>
                  Using data the users provide, the app grants them a{" "}
                  <strong>score number</strong> based on their job and skill
                  experience length.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailBoard} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNews} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Autosort Teams</h2>
                <p>
                  With just one click, let TeamMaker automatically create the
                  teams!
                  <br />
                  <br />
                  In order to create balanced groups, the users will be assigned
                  into multidisciplinary teams according to their score and
                  other rules.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>The Rules</h2>
                <p>
                  You can decide a set of rules to control and customize how
                  TeamMaker will sort the teams (e.g. max number of users,
                  desirable number of front-end engineers...)
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Team"} src={thumbnailTeams} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Users"} src={thumbnailStaff} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Stay Alert</h2>
                <p>
                  TeamMaker will detect all team formation possibilities, and
                  will always try to use the best of them. Still, if there's not
                  enough users to make perfect balanced teams, TeamMaker will{" "}
                  <strong>warn you before sorting.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Test TeamMaker for Free</h2>
          <p>
            We're constantly updating the platform with new features and fixes!{" "}
            We would love to hear your opinion!{" "}
            <a
              href="https://www.producthunt.com/posts/teammaker"
              target={"_blank"}
            >
              Comment on Product Hunt.
            </a>
          </p>
        </div>

        <div className={"button"}>
          <a
            href="http://hackathon-organizer-front.herokuapp.com"
            target={"_blank"}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
