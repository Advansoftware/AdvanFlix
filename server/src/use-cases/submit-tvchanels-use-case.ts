import { TvChanelsRepository } from '../repositories/tvchanels-repositories';

interface SubmitTvChanelsUseCaseRequest {
    link: string;
    image?: string;
    name: string;
    group?: string;
}
export class SubmitTvChanelsUseCase {
    constructor(
        private tvChanelsRepository: TvChanelsRepository,
    ) { }

    async execute(request: SubmitTvChanelsUseCaseRequest) {
        const { link, image, name, group } = request;

        await this.tvChanelsRepository.create({
            link,
            image,
            name,
            group
        });

    }
}