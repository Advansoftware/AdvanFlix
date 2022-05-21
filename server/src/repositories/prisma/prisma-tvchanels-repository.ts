import { prisma } from '../../prisma';
import { TvChanelsRepository, TvChanelsCreateData } from '../tvchanels-repositories';

export class PrismaTvchanelsRepository implements TvChanelsRepository {
    async create({ link, image, name, group }: TvChanelsCreateData) {
        await prisma.tvchanel.create({
            data: {
                link,
                image,
                name,
                group,
            }
        });
    }
}