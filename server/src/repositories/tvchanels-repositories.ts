export interface TvChanelsCreateData {
    link: string;
    image?: string;
    name: string;
    group?: string;
}
export interface TvChanelsRepository {
    create: (data: TvChanelsCreateData) => Promise<void>;
}