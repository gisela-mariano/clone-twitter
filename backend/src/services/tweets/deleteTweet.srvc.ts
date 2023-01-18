import { tweetRepository } from '../../repositories';

const deleteTweetService = async (id: string) => {
  console.log(id);

  await tweetRepository.delete({ id });

  return true;
};

export default deleteTweetService;
