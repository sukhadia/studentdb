


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backbone-query-parameters/backbone.queryparams.js at master · jhudson8/backbone-query-parameters · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe132-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4B38371D:3B90:1A0526AC:525B4892" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="neiJF3Rgjn29ImhKXafZosXvlV5xs4Qib3wLPcKw5yQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-ce4d3d1122ff6f5d3c4e8bbc3002c454a5f0861c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-3fe403d0db22dd33cdbaedfd659caee3b1b22abd.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5036c64d838328b79e082f548848e2898412e869.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-ebd9cc9a650951526861fa81910e3d79ef2481ee.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="ec8d050d6e38995c3d20ef8317019fed">

        <link data-pjax-transient rel='permalink' href='/jhudson8/backbone-query-parameters/blob/b62a0a5e67a8c63fe95990f18fd8ed59687ff471/backbone.queryparams.js'>
  <meta property="og:title" content="backbone-query-parameters"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/jhudson8/backbone-query-parameters"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="backbone-query-parameters - Backbone plugin which provides query parameter support"/>

  <meta name="description" content="backbone-query-parameters - Backbone plugin which provides query parameter support" />

  <meta content="455645" name="octolytics-dimension-user_id" /><meta content="jhudson8" name="octolytics-dimension-user_login" /><meta content="3913794" name="octolytics-dimension-repository_id" /><meta content="jhudson8/backbone-query-parameters" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3913794" name="octolytics-dimension-repository_network_root_id" /><meta content="jhudson8/backbone-query-parameters" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jhudson8/backbone-query-parameters/commits/master.atom" rel="alternate" title="Recent Commits to backbone-query-parameters:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fjhudson8%2Fbackbone-query-parameters%2Fblob%2Fmaster%2Fbackbone.queryparams.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="jhudson8/backbone-query-parameters"
      data-branch="master"
      data-sha="015cbfac2c73c2be5a013db043946909dc2ab49c"
  >

    <input type="hidden" name="nwo" value="jhudson8/backbone-query-parameters" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fjhudson8%2Fbackbone-query-parameters"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/jhudson8/backbone-query-parameters/stargazers">
  236
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fjhudson8%2Fbackbone-query-parameters"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/jhudson8/backbone-query-parameters/network" class="social-count">
        77
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/jhudson8" class="url fn" itemprop="url" rel="author"><span itemprop="title">jhudson8</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/jhudson8/backbone-query-parameters" class="js-current-repository js-repo-home-link">backbone-query-parameters</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/jhudson8/backbone-query-parameters" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jhudson8/backbone-query-parameters">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/jhudson8/backbone-query-parameters/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /jhudson8/backbone-query-parameters/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>13</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/jhudson8/backbone-query-parameters/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /jhudson8/backbone-query-parameters/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/jhudson8/backbone-query-parameters/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /jhudson8/backbone-query-parameters/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/jhudson8/backbone-query-parameters/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /jhudson8/backbone-query-parameters/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/jhudson8/backbone-query-parameters/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /jhudson8/backbone-query-parameters/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jhudson8/backbone-query-parameters.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jhudson8/backbone-query-parameters.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jhudson8/backbone-query-parameters" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jhudson8/backbone-query-parameters" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/jhudson8/backbone-query-parameters" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/jhudson8/backbone-query-parameters/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d2477b9353576534ba72928b3aaa6415 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jhudson8/backbone-query-parameters/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jhudson8/backbone-query-parameters/blob/master/backbone.queryparams.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jhudson8/backbone-query-parameters" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone-query-parameters</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone.queryparams.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone.queryparams.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/e9086a8466db2357a996e50a4b75e69e?d=https%3A%2F%2Fidenticons.github.com%2F5bd756e7ef1019f5b5836aeebdb88c8b.png&amp;s=140" width="24" />
      <span class="author"><a href="/jhudson8" rel="author">jhudson8</a></span>
      <time class="js-relative-date" datetime="2013-10-03T09:51:20-07:00" title="2013-10-03 09:51:20">October 03, 2013</time>
      <div class="commit-title">
          <a href="/jhudson8/backbone-query-parameters/commit/b62a0a5e67a8c63fe95990f18fd8ed59687ff471" class="message" data-pjax="true" title='Merge pull request #60 from bradleyayers/master

Fix #59 — ?cmpid decodes to {cmpid: ""}'>Merge pull request</a> <a href="https://github.com/jhudson8/backbone-query-parameters/pull/60" class="issue-link" title='Fix #59 — ?cmpid decodes to {cmpid: ""}'>#60</a> <a href="/jhudson8/backbone-query-parameters/commit/b62a0a5e67a8c63fe95990f18fd8ed59687ff471" class="message" data-pjax="true" title='Merge pull request #60 from bradleyayers/master

Fix #59 — ?cmpid decodes to {cmpid: ""}'>from bradleyayers/master</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>19</strong> contributors</a></p>
            <a class="avatar tooltipped downwards" title="jhudson8" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=jhudson8"><img height="20" src="https://0.gravatar.com/avatar/e9086a8466db2357a996e50a4b75e69e?d=https%3A%2F%2Fidenticons.github.com%2F5bd756e7ef1019f5b5836aeebdb88c8b.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="camacho" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=camacho"><img height="20" src="https://2.gravatar.com/avatar/ad5509c3e733fb191e7c6d95c0f8234c?d=https%3A%2F%2Fidenticons.github.com%2F3831f90ef74edab41a915ba65efcec5a.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rafaelxy" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=rafaelxy"><img height="20" src="https://2.gravatar.com/avatar/4d9e4c2100ad46139079701219d9219a?d=https%3A%2F%2Fidenticons.github.com%2Fd7717bce79ad775b40bb500fe7286ad2.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sebpiq" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=sebpiq"><img height="20" src="https://1.gravatar.com/avatar/e7a14ff395755c09230176b5cd8a4208?d=https%3A%2F%2Fidenticons.github.com%2F607b7099c0b2338316bef4823fee4c0c.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="emeraldimp" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=emeraldimp"><img height="20" src="https://1.gravatar.com/avatar/f6547365d20dab5915a595c8ef8e13f0?d=https%3A%2F%2Fidenticons.github.com%2F3023ba26c1ab6b1c7949181e02fb15f6.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kpdecker" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=kpdecker"><img height="20" src="https://2.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?d=https%3A%2F%2Fidenticons.github.com%2F0cb9827e5625394fd612b96fffc9b357.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kylefritz" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=kylefritz"><img height="20" src="https://0.gravatar.com/avatar/9aa3a4361e5f45eef7332a8dec16df33?d=https%3A%2F%2Fidenticons.github.com%2Fe5c9a9b84b65dfc5ba62c677aefc5d4a.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jmparsons" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=jmparsons"><img height="20" src="https://2.gravatar.com/avatar/78c942c5fba9c610a9d744bf7e05a786?d=https%3A%2F%2Fidenticons.github.com%2Fc928caf9e6cabd3fd5513dbd72d1f7ac.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nedcampion" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=nedcampion"><img height="20" src="https://2.gravatar.com/avatar/2d37a0ab5ff921b6598b33b314aaa8e3?d=https%3A%2F%2Fidenticons.github.com%2F14507f1b913f233205be54a6b71db5bb.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mdreizin" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=mdreizin"><img height="20" src="https://1.gravatar.com/avatar/cf1dba3adddf45902af811bd23424a01?d=https%3A%2F%2Fidenticons.github.com%2Faa5624a26b4315953b52df8bf0e6d1b7.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="weiribao" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=weiribao"><img height="20" src="https://0.gravatar.com/avatar/52b2cf23bfc8a3463e762602db40e72b?d=https%3A%2F%2Fidenticons.github.com%2F4e728b953924170a1e38ccbf8a0f5979.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jeremyFreeAgent" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=jeremyFreeAgent"><img height="20" src="https://1.gravatar.com/avatar/c57e2aec8465a384f668fab281c8b2f7?d=https%3A%2F%2Fidenticons.github.com%2Fe3dddf20fa325480794766c927a0c09f.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jnachtigall" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=jnachtigall"><img height="20" src="https://0.gravatar.com/avatar/e9e36b02dcb4c2a620adfc0b0e97b775?d=https%3A%2F%2Fidenticons.github.com%2F2283c6fb35d900b5c6f89e23216964ed.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Baggz" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=Baggz"><img height="20" src="https://0.gravatar.com/avatar/9ae4bb9da037386c606645cbc98ff9f0?d=https%3A%2F%2Fidenticons.github.com%2Fe351f1d1c3fec9299fbbd8a31e64dfdb.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="devth" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=devth"><img height="20" src="https://1.gravatar.com/avatar/70c7535cbb9fea0353250a4edda155be?d=https%3A%2F%2Fidenticons.github.com%2Fd26ed1c4c56b5d019656d884a9ddc788.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ebertti" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=ebertti"><img height="20" src="https://1.gravatar.com/avatar/467d5a76b07519c0f0678cb8218e9b45?d=https%3A%2F%2Fidenticons.github.com%2Fdd35b1a822e2567ac52a02f2e2a6a1ef.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="eightysteele" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=eightysteele"><img height="20" src="https://2.gravatar.com/avatar/adf45959890c5de375f36e638dd159b9?d=https%3A%2F%2Fidenticons.github.com%2F19ac34072c546794ef8279a716f43514.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cgarvis" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=cgarvis"><img height="20" src="https://2.gravatar.com/avatar/51d3be13a400e1ea8cdae57f866e9c11?d=https%3A%2F%2Fidenticons.github.com%2F69f964469d6a56a7474714e42b92708f.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cesarFrias" href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js?author=cesarFrias"><img height="20" src="https://0.gravatar.com/avatar/8f8d53501d40286f6a2f228326926909?d=https%3A%2F%2Fidenticons.github.com%2Fa1034e55473c7f51bdbfa3336eeaf92c.png&amp;s=140" width="20" /></a>


      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e9086a8466db2357a996e50a4b75e69e?d=https%3A%2F%2Fidenticons.github.com%2F5bd756e7ef1019f5b5836aeebdb88c8b.png&amp;s=140" width="24" />
            <a href="/jhudson8">jhudson8</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/ad5509c3e733fb191e7c6d95c0f8234c?d=https%3A%2F%2Fidenticons.github.com%2F3831f90ef74edab41a915ba65efcec5a.png&amp;s=140" width="24" />
            <a href="/camacho">camacho</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/4d9e4c2100ad46139079701219d9219a?d=https%3A%2F%2Fidenticons.github.com%2Fd7717bce79ad775b40bb500fe7286ad2.png&amp;s=140" width="24" />
            <a href="/rafaelxy">rafaelxy</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/e7a14ff395755c09230176b5cd8a4208?d=https%3A%2F%2Fidenticons.github.com%2F607b7099c0b2338316bef4823fee4c0c.png&amp;s=140" width="24" />
            <a href="/sebpiq">sebpiq</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/f6547365d20dab5915a595c8ef8e13f0?d=https%3A%2F%2Fidenticons.github.com%2F3023ba26c1ab6b1c7949181e02fb15f6.png&amp;s=140" width="24" />
            <a href="/emeraldimp">emeraldimp</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?d=https%3A%2F%2Fidenticons.github.com%2F0cb9827e5625394fd612b96fffc9b357.png&amp;s=140" width="24" />
            <a href="/kpdecker">kpdecker</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/9aa3a4361e5f45eef7332a8dec16df33?d=https%3A%2F%2Fidenticons.github.com%2Fe5c9a9b84b65dfc5ba62c677aefc5d4a.png&amp;s=140" width="24" />
            <a href="/kylefritz">kylefritz</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/78c942c5fba9c610a9d744bf7e05a786?d=https%3A%2F%2Fidenticons.github.com%2Fc928caf9e6cabd3fd5513dbd72d1f7ac.png&amp;s=140" width="24" />
            <a href="/jmparsons">jmparsons</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/2d37a0ab5ff921b6598b33b314aaa8e3?d=https%3A%2F%2Fidenticons.github.com%2F14507f1b913f233205be54a6b71db5bb.png&amp;s=140" width="24" />
            <a href="/nedcampion">nedcampion</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cf1dba3adddf45902af811bd23424a01?d=https%3A%2F%2Fidenticons.github.com%2Faa5624a26b4315953b52df8bf0e6d1b7.png&amp;s=140" width="24" />
            <a href="/mdreizin">mdreizin</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/52b2cf23bfc8a3463e762602db40e72b?d=https%3A%2F%2Fidenticons.github.com%2F4e728b953924170a1e38ccbf8a0f5979.png&amp;s=140" width="24" />
            <a href="/weiribao">weiribao</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/c57e2aec8465a384f668fab281c8b2f7?d=https%3A%2F%2Fidenticons.github.com%2Fe3dddf20fa325480794766c927a0c09f.png&amp;s=140" width="24" />
            <a href="/jeremyFreeAgent">jeremyFreeAgent</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/e9e36b02dcb4c2a620adfc0b0e97b775?d=https%3A%2F%2Fidenticons.github.com%2F2283c6fb35d900b5c6f89e23216964ed.png&amp;s=140" width="24" />
            <a href="/jnachtigall">jnachtigall</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/9ae4bb9da037386c606645cbc98ff9f0?d=https%3A%2F%2Fidenticons.github.com%2Fe351f1d1c3fec9299fbbd8a31e64dfdb.png&amp;s=140" width="24" />
            <a href="/Baggz">Baggz</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/70c7535cbb9fea0353250a4edda155be?d=https%3A%2F%2Fidenticons.github.com%2Fd26ed1c4c56b5d019656d884a9ddc788.png&amp;s=140" width="24" />
            <a href="/devth">devth</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/467d5a76b07519c0f0678cb8218e9b45?d=https%3A%2F%2Fidenticons.github.com%2Fdd35b1a822e2567ac52a02f2e2a6a1ef.png&amp;s=140" width="24" />
            <a href="/ebertti">ebertti</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/adf45959890c5de375f36e638dd159b9?d=https%3A%2F%2Fidenticons.github.com%2F19ac34072c546794ef8279a716f43514.png&amp;s=140" width="24" />
            <a href="/eightysteele">eightysteele</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/51d3be13a400e1ea8cdae57f866e9c11?d=https%3A%2F%2Fidenticons.github.com%2F69f964469d6a56a7474714e42b92708f.png&amp;s=140" width="24" />
            <a href="/cgarvis">cgarvis</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/8f8d53501d40286f6a2f228326926909?d=https%3A%2F%2Fidenticons.github.com%2Fa1034e55473c7f51bdbfa3336eeaf92c.png&amp;s=140" width="24" />
            <a href="/cesarFrias">cesarFrias</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>322 lines (296 sloc)</span>
        <span>10.68 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-mac-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/jhudson8/backbone-query-parameters?branch=master&amp;filepath=backbone.queryparams.js"
               title="Open this file in GitHub for Mac">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/jhudson8/backbone-query-parameters/raw/master/backbone.queryparams.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jhudson8/backbone-query-parameters/blame/master/backbone.queryparams.js" class="button minibutton ">Blame</a>
          <a href="/jhudson8/backbone-query-parameters/commits/master/backbone.queryparams.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">root</span><span class="p">.</span><span class="nx">require</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;underscore&quot;</span><span class="p">),</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backbone&quot;</span><span class="p">));</span></div><div class='line' id='LC4'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s2">&quot;underscore&quot;</span><span class="p">,</span><span class="s2">&quot;backbone&quot;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use global variables if the locals are undefined.</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">_</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// RequireJS isn&#39;t being used. Assume underscore and backbone are loaded in &lt;script&gt; tags</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC14'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="kd">var</span> <span class="nx">queryStringParam</span> <span class="o">=</span> <span class="sr">/^\?(.*)/</span><span class="p">,</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">optionalParam</span> <span class="o">=</span> <span class="sr">/\((.*?)\)/g</span><span class="p">,</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namedParam</span>    <span class="o">=</span> <span class="sr">/(\(\?)?:\w+/g</span><span class="p">,</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">splatParam</span>    <span class="o">=</span> <span class="sr">/\*\w+/g</span><span class="p">,</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escapeRegExp</span>  <span class="o">=</span> <span class="sr">/[\-{}\[\]+?.,\\\^$|#\s]/g</span><span class="p">,</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queryStrip</span> <span class="o">=</span> <span class="sr">/(\?.*)$/</span><span class="p">,</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragmentStrip</span> <span class="o">=</span> <span class="sr">/^([^\?]*)/</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasQueryString</span> <span class="o">=</span> <span class="sr">/(\?)[\w-]+/i</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namesPattern</span> <span class="o">=</span> <span class="sr">/[\:\*]([^\:\?\/]+)/g</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">routeStripper</span> <span class="o">=</span> <span class="sr">/^[#\/]|\s+$/g</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">trailingSlash</span> <span class="o">=</span> <span class="sr">/\/$/</span><span class="p">;</span></div><div class='line' id='LC27'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span><span class="p">.</span><span class="nx">arrayValueSplit</span> <span class="o">=</span> <span class="s1">&#39;|&#39;</span><span class="p">;</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="kd">var</span> <span class="nx">_getFragment</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fragment</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">||</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">pathname</span><span class="p">;</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">trailingSlash</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">search</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">;</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">fragment</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">root</span><span class="p">))</span> <span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">root</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">search</span><span class="p">)</span> <span class="nx">fragment</span> <span class="o">+=</span> <span class="nx">search</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getHash</span><span class="p">();</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">routeStripper</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC42'><span class="p">}</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">History</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="nx">getFragment</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">excludeQueryString</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wantsHashChange</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wantsPushState</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_hasPushState</span><span class="p">);</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_fragment</span> <span class="o">=</span> <span class="nx">_getFragment</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">fragment</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">_fragment</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">hasQueryString</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">_fragment</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_fragment</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="p">;</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">excludeQueryString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_fragment</span> <span class="o">=</span> <span class="nx">_fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">queryStrip</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_fragment</span><span class="p">;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="c1">// this will not perform custom query param serialization specific to the router</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="c1">// but will return a map of key/value pairs (the value is a string or array)</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="nx">getQueryParameters</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">forcePushState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="nx">_getFragment</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if no query string exists, this will still be the original fragment</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">queryString</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">fragmentStrip</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">queryString</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">queryStringParam</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queryString</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rtn</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterateQueryString</span><span class="p">(</span><span class="nx">queryString</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// decodeURIComponent doesn&#39;t touch &#39;+&#39;</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+/g</span><span class="p">,</span> <span class="s1">&#39;%20&#39;</span><span class="p">);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">],</span> <span class="nx">value</span><span class="p">];</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rtn</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// no values</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{};</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC85'><span class="p">});</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">encodedSplatParts</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">encodedSplatParts</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="nx">getFragment</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fragment</span><span class="p">,</span> <span class="nx">forcePushState</span><span class="p">,</span> <span class="nx">excludeQueryString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="nx">_getFragment</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">excludeQueryString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fragment</span> <span class="o">=</span> <span class="nx">fragment</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">queryStrip</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fragment</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="nx">_routeToRegExp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splatMatch</span> <span class="o">=</span> <span class="p">(</span><span class="nx">splatParam</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">route</span><span class="p">)</span> <span class="o">||</span> <span class="p">{</span><span class="nx">index</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">}),</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namedMatch</span> <span class="o">=</span> <span class="p">(</span><span class="nx">namedParam</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">route</span><span class="p">)</span> <span class="o">||</span> <span class="p">{</span><span class="nx">index</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">}),</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">paramNames</span> <span class="o">=</span> <span class="nx">route</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">namesPattern</span><span class="p">)</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span> <span class="o">=</span> <span class="nx">route</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escapeRegExp</span><span class="p">,</span> <span class="s1">&#39;\\$&amp;&#39;</span><span class="p">)</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">optionalParam</span><span class="p">,</span> <span class="s1">&#39;(?:$1)?&#39;</span><span class="p">)</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">namedParam</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">optional</span><span class="p">){</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">optional</span> <span class="o">?</span> <span class="nx">match</span> <span class="o">:</span> <span class="s1">&#39;([^\\/\\?]+)&#39;</span><span class="p">;</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `[^??]` is hacking around a regular expression bug under iOS4.</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If only `[^?]` is used then paths like signin/photos will fail</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// while paths with `?` anywhere, like `signin/photos?`, will succeed.</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">splatParam</span><span class="p">,</span> <span class="s1">&#39;([^??]*?)&#39;</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span> <span class="o">+=</span> <span class="s1">&#39;(\\?.*)?&#39;</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rtn</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^&#39;</span> <span class="o">+</span> <span class="nx">route</span> <span class="o">+</span> <span class="s1">&#39;$&#39;</span><span class="p">);</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// use the rtn value to hold some parameter data</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">splatMatch</span><span class="p">.</span><span class="nx">index</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// there is a splat</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">namedMatch</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// negative value will indicate there is a splat match before any named matches</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">.</span><span class="nx">splatMatch</span> <span class="o">=</span> <span class="nx">splatMatch</span><span class="p">.</span><span class="nx">index</span> <span class="o">-</span> <span class="nx">namedMatch</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">.</span><span class="nx">splatMatch</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">.</span><span class="nx">paramNames</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">paramNames</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">name</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span><span class="p">.</span><span class="nx">namedParameters</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">namedParameters</span><span class="p">;</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rtn</span><span class="p">;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC134'><span class="cm">   * Given a route, and a URL fragment that it matches, return the array of</span></div><div class='line' id='LC135'><span class="cm">   * extracted parameters.</span></div><div class='line' id='LC136'><span class="cm">   */</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="nx">_extractParameters</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">fragment</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">route</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">fragment</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namedParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">params</span><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="c1">// remove potential invalid data from query params match</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="nx">params</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// do we have an additional query string?</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">params</span><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">params</span><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span><span class="nx">queryStringParam</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">queryString</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">queryString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterateQueryString</span><span class="p">(</span><span class="nx">queryString</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">_setParamValue</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">namedParams</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// decode params</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">route</span><span class="p">.</span><span class="nx">splatMatch</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">encodedSplatParts</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">route</span><span class="p">.</span><span class="nx">splatMatch</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// splat param is first</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">params</span><span class="p">;</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">params</span><span class="p">[</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">params</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">route</span><span class="p">.</span><span class="nx">paramNames</span> <span class="o">&amp;&amp;</span> <span class="nx">route</span><span class="p">.</span><span class="nx">paramNames</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">i</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namedParams</span><span class="p">[</span><span class="nx">route</span><span class="p">.</span><span class="nx">paramNames</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">params</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span><span class="p">.</span><span class="nx">namedParameters</span> <span class="o">||</span> <span class="nx">route</span><span class="p">.</span><span class="nx">namedParameters</span><span class="p">)</span> <span class="o">?</span> <span class="p">[</span><span class="nx">namedParams</span><span class="p">]</span> <span class="o">:</span> <span class="nx">params</span><span class="p">;</span></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC184'><span class="cm">   * Set the parameter value on the data hash</span></div><div class='line' id='LC185'><span class="cm">   */</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="nx">_setParamValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// use &#39;.&#39; to define hash separators</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span> <span class="o">=</span> <span class="nx">key</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;[]&#39;</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">key</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">);</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">part</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set the value</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_data</span><span class="p">[</span><span class="nx">part</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_decodeParamValue</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">_data</span><span class="p">[</span><span class="nx">part</span><span class="p">]);</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_data</span> <span class="o">=</span> <span class="nx">_data</span><span class="p">[</span><span class="nx">part</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_data</span><span class="p">[</span><span class="nx">part</span><span class="p">]</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC203'><span class="cm">   * Decode an individual parameter value (or list of values)</span></div><div class='line' id='LC204'><span class="cm">   * @param value the complete value</span></div><div class='line' id='LC205'><span class="cm">   * @param currentValue the currently known value (or list of values)</span></div><div class='line' id='LC206'><span class="cm">   */</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="nx">_decodeParamValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">currentValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// decodeURIComponent doesn&#39;t translate &#39;+&#39;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+/g</span><span class="p">,</span> <span class="s1">&#39;%20&#39;</span><span class="p">);</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// &#39;|&#39; will indicate an array.  Array with 1 value is a=|b - multiple values can be a=b|c</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splitChar</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span><span class="p">.</span><span class="nx">arrayValueSplit</span><span class="p">;</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">splitChar</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">splitChar</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">splitChar</span><span class="p">);</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// clean it up</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">values</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">;</span> <span class="nx">i</span><span class="o">&gt;=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">values</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">values</span><span class="p">;</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">currentValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">currentValue</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentValue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">currentValue</span><span class="p">;</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">currentValue</span><span class="p">,</span> <span class="nx">value</span><span class="p">];</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC237'><span class="cm">   * Return the route fragment with queryParameters serialized to query parameter string</span></div><div class='line' id='LC238'><span class="cm">   */</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="nx">toFragment</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">route</span><span class="p">,</span> <span class="nx">queryParameters</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">queryParameters</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">queryParameters</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queryParameters</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryString</span><span class="p">(</span><span class="nx">queryParameters</span><span class="p">);</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">queryParameters</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span> <span class="o">+=</span> <span class="s1">&#39;?&#39;</span> <span class="o">+</span> <span class="nx">queryParameters</span><span class="p">;</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">route</span><span class="p">;</span></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC252'><span class="cm">   * Serialize the val hash to query parameters and return it.  Use the namePrefix to prefix all param names (for recursion)</span></div><div class='line' id='LC253'><span class="cm">   */</span></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="nx">_toQueryString</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">namePrefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splitChar</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Router</span><span class="p">.</span><span class="nx">arrayValueSplit</span><span class="p">;</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeSplit</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">splitChar</span><span class="p">,</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">splitChar</span><span class="p">));</span> <span class="p">}</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">val</span><span class="p">)</span> <span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">namePrefix</span> <span class="o">=</span> <span class="nx">namePrefix</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rtn</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">name</span> <span class="k">in</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_val</span> <span class="o">=</span> <span class="nx">val</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isDate</span><span class="p">(</span><span class="nx">_val</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// primitive type</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_val</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryParam</span><span class="p">(</span><span class="nx">_val</span><span class="p">);</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">_val</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">rtn</span> <span class="o">?</span> <span class="s1">&#39;&amp;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryParamName</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">namePrefix</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nx">encodeSplit</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">_val</span><span class="p">));</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">_val</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// arrays use Backbone.Router.arrayValueSplit separator</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">_val</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">param</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryParam</span><span class="p">(</span><span class="nx">_val</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="o">||</span> <span class="nx">param</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">+=</span> <span class="nx">splitChar</span> <span class="o">+</span> <span class="nx">encodeSplit</span><span class="p">(</span><span class="nx">param</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">rtn</span> <span class="o">?</span> <span class="s1">&#39;&amp;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryParamName</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">namePrefix</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// dig into hash</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryString</span><span class="p">(</span><span class="nx">_val</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_toQueryParamName</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">namePrefix</span><span class="p">,</span> <span class="kc">true</span><span class="p">));</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rtn</span> <span class="o">+=</span> <span class="p">(</span><span class="nx">rtn</span> <span class="o">?</span> <span class="s1">&#39;&amp;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rtn</span><span class="p">;</span></div><div class='line' id='LC290'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC293'><span class="cm">   * return the actual parameter name</span></div><div class='line' id='LC294'><span class="cm">   * @param name the parameter name</span></div><div class='line' id='LC295'><span class="cm">   * @param namePrefix the prefix to the name</span></div><div class='line' id='LC296'><span class="cm">   * @param createPrefix true if we&#39;re creating a name prefix, false if we&#39;re creating the name</span></div><div class='line' id='LC297'><span class="cm">   */</span></div><div class='line' id='LC298'>&nbsp;&nbsp;<span class="nx">_toQueryParamName</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">prefix</span><span class="p">,</span> <span class="nx">isPrefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">prefix</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="p">(</span><span class="nx">isPrefix</span> <span class="o">?</span> <span class="s1">&#39;.&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC300'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC303'><span class="cm">   * Return the string representation of the param used for the query string</span></div><div class='line' id='LC304'><span class="cm">   */</span></div><div class='line' id='LC305'>&nbsp;&nbsp;<span class="nx">_toQueryParam</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span><span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">param</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">param</span><span class="p">;</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC311'><span class="p">});</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'><span class="kd">function</span> <span class="nx">iterateQueryString</span><span class="p">(</span><span class="nx">queryString</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keyValues</span> <span class="o">=</span> <span class="nx">queryString</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">keyValues</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">keyValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">arr</span> <span class="o">=</span> <span class="nx">keyValue</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">arr</span><span class="p">.</span><span class="nx">shift</span><span class="p">(),</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">));</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC319'><span class="p">}</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'><span class="p">}));</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06125s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jhudson8/backbone-query-parameters/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

