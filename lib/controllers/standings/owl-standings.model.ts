
export type Title = 'string'

export class OwlStandings {

    public title: Title;


    public fromJSON(json): OwlStandings {

        const standings = new OwlStandings();

        standings.title = json.meta.strings.owl.standings.title;

        return standings;

    }

                          
}