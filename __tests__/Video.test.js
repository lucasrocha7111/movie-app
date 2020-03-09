import 'react-native';
import React from 'react';
import { VideoService } from '../src/services/videos';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('VideoService test', () => {
    const videoService = new VideoService()
    it('Get Discover Movie', async () => {
        const r = await videoService.discover('movie')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
    it('Get Discover TV', async () => {
        const r = await videoService.discover('tv')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
    it('Get genres movie', async () => {
        const r = await videoService.genres('movie')
        expect(r.data?.genres?.length).toBeGreaterThan(0)
    });
    it('Get genres TV', async () => {
        const r = await videoService.genres('tv')
        expect(r.data?.genres?.length).toBeGreaterThan(0)
    });
    it('Get Search Movie', async () => {
        const r = await videoService.search('Kung Fu', 'movie')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
    it('Get Search TV', async () => {
        const r = await videoService.search('Kung Fu', 'tv')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
    it('Get Trends Movie', async () => {
        const r = await videoService.trends('movie')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
    it('Get Trends TV', async () => {
        const r = await videoService.trends('tv')
        expect(r.data?.results?.length).toBeGreaterThan(0)
    });
})
