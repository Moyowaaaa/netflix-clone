export interface HomeProps {
    popular: any[];
    playing: any[];
    popularTv: any[];
    title:string[];
}

export interface TvShowsProps {
    todaysTv: any[];
  topRatedTv: any[];
  popularTv: any[];
}

export interface MovieProps {
    comingSoon: any[];
    playing: any[];   
    popular: any[];
    topRated:any[];

}

export interface MovieRowProps {
    title: string;
    data: any[];
}

export interface InfoProps {
    set:any
    id:number;
    title:string,
    rating:number,
    description:string,
    date:string | number | any,
    image:any 
}

export interface PopularProp {
    popular:any[]
}
