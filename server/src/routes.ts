import express from 'express';
import { PrismaTvchanelsRepository } from './repositories/prisma/prisma-tvchanels-repository';
import { SubmitTvChanelsUseCase } from './use-cases/submit-tvchanels-use-case';
import { getJsonListFromUrlAsync } from './iptv-list-to-json';
import { prisma } from './prisma';
import axios from 'axios';

export const routes = express.Router();


async function sync(data: any) {

    const prismaTvchanelsRepository = new PrismaTvchanelsRepository();

    const submitTvchanelsUseCase = new SubmitTvChanelsUseCase(
        prismaTvchanelsRepository
    );
    data.forEach(async (element: any) => {
        await submitTvchanelsUseCase.execute({
            link: element.link,
            image: element.image,
            name: element.name,
            group: element.group
        });
    });

};
routes.get('/sync', async (req, res) => {
    const { url } = req.query;
    try {
        await prisma.tvchanel.deleteMany({})
        let data = await getJsonListFromUrlAsync(<string>url);
        //http://lib.bz
        await sync(data);
    }
    catch (e) {
        return res.status(500).send();
    }
    return res.status(200).send();
});

routes.get('/listAll', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    const tvchanel = await prisma.tvchanel.findMany({
        skip: 0,
        take: 60,
    })
    return res.status(200).json(tvchanel);
});


routes.get('/sincTop', async (req, res) => {
    try {
        await prisma.topPopular.deleteMany({})
        const data = await axios.request({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=b5a560810b4100fa7ce63b83d3756009&language=pt-br&page=2',
            timeout: 0,
        });

        if (!!data.data.results) {
            data.data.results.forEach(async (element: any) => {
                await prisma.topPopular.create({
                    data: {
                        name: element.title,
                        logo: 'https://image.tmdb.org/t/p/original/' + element.poster_path,
                        image: 'https://image.tmdb.org/t/p/original/' + element.backdrop_path,
                        description: element.overview,
                    }
                });
            }
            )
        }
    } catch (e) {
        console.log(e)
    }
    return res.status(200).send();
});

routes.get('/listcarousel', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    const topPopular = await prisma.topPopular.findMany()
    return res.status(200).json(topPopular);
});
