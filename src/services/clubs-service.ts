import * as HttpResponse from './../utils/http-helper';
import * as ClubRepository from './../repositories/clubs-repository'

export const getClubsService = async () => {
    const data = await ClubRepository.findAllClubs();
    return HttpResponse.ok(data);
}