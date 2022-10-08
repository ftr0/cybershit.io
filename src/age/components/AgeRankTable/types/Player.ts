export interface Player {
    avatars: any;
    page: number;
    players: [{
      name: string;
      rank: number;
      games_count: number;
      wins_count: number;
      losses_count: number;
      win_rate: number;
      avatars:{
          full:string;
        },
      rank_level: string;
    }]
  }
  