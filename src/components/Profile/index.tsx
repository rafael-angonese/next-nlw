import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img src="https://github.com/rafael-angonese.png" alt="Rafael Angonese" />

      <div>
        <strong>Rafael Angonese</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
