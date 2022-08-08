import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "bratislava.sk",
    Svg: require("/static/img/web-icon.svg").default,
    description: <>The main Bratislava website</>,
  },
  {
    title: "More to come",
    Svg: require("/static/img/other-icon.svg").default,
    description: <>...more documented projects soon 🙂</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center" style={{ marginBottom: 20 }}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <p>🔧 work in progress, more to come...</p>
          <h3>Included projects</h3>
          <p>
            <a href="https://bratislava.sk">🏡 bratislava.sk</a>{" "}
            <a href="https://github.com/braislava/bratislava.sk">(github)</a>
            <br />
            <a href="https://cdn-api.bratislava.sk/static-pages/greenary-care-map/index.html?lang=sk">
              🌍 City maps
            </a>{" "}
            <a href="https://github.com/braislava/maps">(github)</a>
            <br />
          </p>
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
        </div>
      </div>
    </section>
  )
}
