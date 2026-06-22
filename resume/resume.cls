%% resume.cls — clean 2-page resume class (XeLaTeX)
%% Built around packages available in the local TeX Live (no titlesec/fontawesome/xltxtra).
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[2026/06/21 Hao Hu resume class]
\LoadClass[11pt]{article}

\RequirePackage[a4paper,left=1.4cm,right=1.4cm,top=1.15cm,bottom=1.0cm]{geometry}
\RequirePackage{fontspec}
\RequirePackage{xcolor}
\RequirePackage{enumitem}
\RequirePackage{array}
\RequirePackage{microtype}
\RequirePackage[hidelinks]{hyperref}

% ---- spacing ----
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\linespread{1.04}
\pagestyle{empty}

% ---- fonts (TeX Gyre Heros = Helvetica-like) ----
\defaultfontfeatures{Ligatures=TeX}
\setmainfont{texgyreheros}[
  Path = /home/hao/texlive/texmf-dist/fonts/opentype/public/tex-gyre/ ,
  Extension = .otf ,
  UprightFont = *-regular ,
  BoldFont = *-bold ,
  ItalicFont = *-italic ,
  BoldItalicFont = *-bolditalic ,
  Scale = 0.90
]

% ---- colors ----
\definecolor{accent}{HTML}{16365C}   % deep navy
\definecolor{muted}{HTML}{4A4A4A}
\hypersetup{colorlinks=true, urlcolor=accent, linkcolor=accent}

% ---- list defaults (tight) ----
\setlist[itemize]{leftmargin=1.15em, itemsep=1.2pt, topsep=1pt, partopsep=0pt, parsep=0pt,
  label=\textcolor{accent}{\small\textbullet}}

% ---- header blocks ----
\newcommand{\name}[1]{%
  {\centering\fontsize{22}{26}\selectfont\bfseries\color{accent}\MakeUppercase{#1}\par}%
  \vspace{3pt}%
}
\newcommand{\headline}[1]{%
  {\centering\large\color{accent}#1\par}%
  \vspace{4pt}%
}
\newcommand{\contact}[1]{%
  {\centering\small #1\par}%
  \vspace{1pt}%
}

% ---- section header with rule ----
\newif\ifcv@firstentry
\newcommand{\cvsection}[1]{%
  \vspace{6pt}%
  {\large\bfseries\color{accent}\addfontfeature{LetterSpace=8.0}\MakeUppercase{#1}}\par\vspace{2pt}%
  {\color{accent}\hrule height 1.1pt}\vspace{5.5pt}%
  \cv@firstentrytrue
}

% ---- experience entry: {company}{dates}{role}{location} ----
\newcommand{\cventry}[4]{%
  \ifcv@firstentry\cv@firstentryfalse\else\vspace{5pt}\fi
  {\bfseries #1}\hfill{\bfseries #2}\par
  {\itshape #3}\hfill{\itshape\color{muted} #4}\par
  \vspace{1pt}%
}

% ---- education entry: {school}{dates}{degree}{detail} ----
\newcommand{\cvedu}[4]{%
  \ifcv@firstentry\cv@firstentryfalse\else\vspace{2pt}\fi
  {\bfseries #1}\hfill{#2}\par
  {\itshape #3}\hfill{\color{muted} #4}\par
  \vspace{1pt}%
}

% ---- skills line: {category}{items} ----
\newcommand{\cvskill}[2]{%
  \textbf{#1:} #2\par\vspace{2pt}%
}

% ---- summary line ----
\newcommand{\cvsummary}[1]{#1\par\vspace{2pt}}
