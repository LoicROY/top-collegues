import { Avis } from 'src/app/models/avis';
import { Collegue } from 'src/app/models/collegue';

export interface Vote {
    collegue: Collegue,
    avis: Avis
}