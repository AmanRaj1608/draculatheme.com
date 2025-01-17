import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Shuffle from 'shufflejs';
import Theme from '../layouts/Theme';
import ProCta from '../components/ProCta';
import paths from '../lib/paths';
import styles from './index.module.css';

export async function getStaticProps() {
  const query = { title: 'Dracula', color: 'purple', icon: 'pack-1/045-dracula.svg' }
  const isProd = process.env.NODE_ENV === 'production';
  const base = isProd ? 'https://draculatheme.com' : 'http://localhost:3000';

  if (isProd) {
    for (const path of paths) {
      const viewsReq = await fetch(`${base}/api/views/${path.params.theme}`);
      const viewsRes = await viewsReq.json();

      path.params.views = parseInt(viewsRes.views);
    }

    paths.sort(function (a, b) {
      return b.params.views - a.params.views;
    });
  }

  return { props: { paths, query } };
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      filter: 'all',
      paths: props.paths,
      total: props.paths.length
    };

    this.element = React.createRef();
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element.current, {
      itemSelector: '.app',
      sizer: 360
    });
    const loadFilter = localStorage.getItem('filter');
    const loadSearch = localStorage.getItem('search');
    if (loadFilter) {
      this.setState({ filter: loadFilter });
      this.onFilter(loadFilter);
    }
    if (loadSearch) {
      this.setState({ search: loadSearch })
      this.onSearch(undefined, loadSearch)
    }
  }

  componentWillUnmount() {
    this.shuffle.destroy();
  }

  renderItems() {
    return this.props.paths.map(path => {
      const views = new Intl.NumberFormat().format(path.params.views || 0);
      return <Link key={path.params.theme} href={'/[theme]'} as={`/${path.params.theme}`}>
        <a data-title={path.params.title} data-groups={JSON.stringify(path.params.platform)} data-synonyms={path.params.synonyms ? JSON.stringify(path.params.synonyms) : ''} className="app" style={{ display: 'block', width: 360, height: 325 }}>
          <span className="app-img">
            <img src={`/static/icons/${path.params.icon}`} width={200} height={200} alt={path.params.title} />
          </span>
          <h3 className={`app-title ${path.params.color}`}>{path.params.title}</h3>
          <p className="app-views">{views} views</p>
        </a>
      </Link>
    });
  }

  onFilter(platform) {
    this.setState({
      search: '',
      filter: platform,
    });

    localStorage.removeItem('search');
    localStorage.setItem('filter', platform);

    if (platform === 'all') {
      platform = ['all', 'linux', 'mac', 'windows'];
    } else {
      platform = ['all'].concat([platform]);
    }

    let total = 0;

    this.shuffle.filter(element => {
      const groups = JSON.parse(element.dataset.groups);

      if (groups.some(group => platform.includes(group))) {
        total = total + 1;
        return element;
      }
    });

    this.setState({ total });
  }

  onSearch(e, loadSearch) {
    let search;
    
    if (loadSearch) {
      this.setState({
        search: loadSearch,
        filter: 'all',
      })
      search = loadSearch;
    } else {
      this.setState({
        search: e.target.value,
        filter: 'all',
      });
      search = e.target.value;
      localStorage.setItem('search', e.target.value);
    }

    const searchText = search.toLowerCase();

    let total = 0;

    this.shuffle.filter(element => {
      let dictionary = [];

      dictionary.push(element.dataset.title.toLowerCase());

      if (element.dataset.synonyms) {
        const synonyms = JSON.parse(element.dataset.synonyms);
        dictionary = dictionary.concat(synonyms);
      }

      let hasFound = false;

      dictionary.forEach(item => {
        if (item.indexOf(searchText) !== -1) {
          hasFound = true;
        }
      });

      if (hasFound) {
        total = total + 1;
        return element;
      }
    });

    this.setState({ total });
  }

  render() {
    const title = `Dracula — Dark theme for ${this.state.total}+ apps`;
    const description = 'Dracula is a color scheme for code editors and terminal emulators such as Vim, Notepad++, iTerm, VSCode, Terminal.app, ZSH, and much more.';

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Zeno Rocha" name="author" />
          <meta content="https://draculatheme.com" property="og:url" />
          <meta content="https://draculatheme.com/static/img/facebook.png" property="og:image" />
        </Head>

        <div className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.group}>
              <span className={styles.label}>Showing {this.state.total} app(s)</span>
            </div>

            <div className={styles.group}>
              <label htmlFor="search" className={styles.searchLabel}>Search</label>
              <input id="search" className={styles.search} value={this.state.search} placeholder={`Search...`} onChange={this.onSearch.bind(this)} type="search" />
            </div>

            <div className={styles.group}>
              <div className={styles.buttonGroup}>
                <button className={this.state.filter === 'all' ? styles.buttonSelected : styles.button} onClick={this.onFilter.bind(this, 'all')}>All</button>
                <button className={this.state.filter === 'linux' ? styles.buttonSelected : styles.button} onClick={this.onFilter.bind(this, 'linux')}>Linux</button>
                <button className={this.state.filter === 'mac' ? styles.buttonSelected : styles.button} onClick={this.onFilter.bind(this, 'mac')}>Mac</button>
                <button className={this.state.filter === 'windows' ? styles.buttonSelected : styles.button} onClick={this.onFilter.bind(this, 'windows')}>Windows</button>
              </div>
            </div>
          </div>
          <div ref={this.element} className={styles.results}>
            {this.renderItems()}
          </div>
        </div>

        <ProCta />
      </div>
    )
  }
}

Index.Layout = Theme;

export default Index;
