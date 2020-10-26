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
