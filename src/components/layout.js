/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"TeamMaker"}>
                      <img alt={"Logo"} src={logo} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      TeamMaker was created with the goal of solving online
                      hackathon problems and to give users a better experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>Links</h4>
                    <ul>
                      <li>
                        <a
                          href={
                            "http://hackathon-organizer-front.herokuapp.com/"
                          }
                        >
                          Live Demo
                        </a>
                      </li>
                      <li>
                        <a
                          href={
                            "https://github.com/Valdjr/team-organizer-frontend"
                          }
                        >
                          Frontend
                        </a>
                      </li>
                      <li>
                        <a
                          href={
                            "https://github.com/Valdjr/team-organizer-backend"
                          }
                        >
                          Backend
                        </a>
                      </li>
                      <li>
                        <a
                          className={"links__special"}
                          href={"https://www.producthunt.com/posts/teammaker"}
                          target={"_blank"}
                          title={
                            "We look forward to receiving your great feedback on Product Hunt!"
                          }
                        >
                          Feedback
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Our Team</h4>
                    <ul>
                      <li>
                        <a href={"https://www.producthunt.com/@caco_carniatto"}>
                          Carlos Carniatto
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.producthunt.com/@jerp86"}>
                          José Eduardo
                        </a>
                      </li>
                      <li>
                        <a
                          href={
                            "https://www.producthunt.com/@new_user_2654c94f29"
                          }
                        >
                          Paulo Antonio
                        </a>
                      </li>
                      <li>
                        <a href={"https://www.producthunt.com/@rodrigogsn"}>
                          Rodrigo Gomes
                        </a>
                      </li>
                      <li>
                        <a
                          href={
                            "https://www.producthunt.com/@valdir_junior_bling"
                          }
                        >
                          Valdir Junior
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a
                      href="https://github.com/Valdjr/team-organizer-backend"
                      target={"_blank"}
                      title={"GitHub"}
                    >
                      <img alt={"GitHub"} src={iconGitHub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Since {new Date().getFullYear()}. TeamMaker is an open-source
                project. Visit us on GitHub.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
