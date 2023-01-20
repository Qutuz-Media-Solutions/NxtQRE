// https://beta.nextjs.org/docs/api-reference/file-conventions/head#sharing-tags-across-multiple-routes
import DefaultTags from '@/meta/default-tags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>This is Next 13</title>
    </>
  );
}
