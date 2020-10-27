type Team = {
  _id: string;
  id: string;
  name: string;
  shortName: string;
  officialName: string;
  code: string;
  position: string;
};

interface IScore {
  home: number;
  away: number;
}

interface IPlayerStats {
  id: string;
  name: string;
  position: string;
  stats: {
    shots: number;
    shotsOnTarget: number;
    passes: number;
    tackles: number;
  };
}

interface IMatchStat {
  fh: string;
  sh: string;
  type: string;
  value: string;
}

interface ITeamLineup {
  teamId: string;
  teamName: string;
  first11: IPlayerStats[];
  subs: IPlayerStats[];
  stats: IMatchStat[];
}

interface ILineUps {
  home?: ITeamLineup;
  away?: ITeamLineup;
  requested: boolean;
}

interface IFormattedStat {
  [key: string]: [IMatchStat];
}

interface IFormattedStats {
  home: IFormattedStat;
  away: IFormattedStat;
}
