import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero relative flex-1 overflow-hidden p-8 text-center lg:p-16">
      <figure className="absolute inset-0 z-0 m-0">
        <img
          className="h-full w-full object-cover object-center"
          alt="Sunset upon beach" // cspell:disable-line
          src="	https://cdn.pixabay.com/photo/2016/11/29/08/15/beach-1868342_1280.jpg"
          referrerPolicy="no-referrer"
        />
        <figcaption className="badge badge--secondary absolute bottom-1 right-1">
          Photo by{' '}
          <Link to="https://pixabay.com/photos/beach-sea-sunset-dusk-twilight-1868342/">
            {/* cspell:disable-next-line */}
            Pexels
          </Link>
        </figcaption>
      </figure>
      <div className="container z-0 text-neutral-950">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center">
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
