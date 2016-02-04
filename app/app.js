import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('home', '/',
    route('sub'),
    route('nameEntry'),
    route('lists')
  )
);
