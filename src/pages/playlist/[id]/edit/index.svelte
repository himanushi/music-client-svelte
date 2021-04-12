<script lang="ts">
import { params } from "@roxi/routify";
import { mutation, query } from "svelte-apollo";
import { modal } from "~/components/modal.svelte";
import { PlaylistDocument, UpsertPlaylistDocument } from "~/graphql/types";
import type {
  Playlist,
  PlaylistQuery,
  PlaylistPublicTypeEnum,
  UpsertPlaylistMutationVariables
} from "~/graphql/types";

const id = $params.id as string;

let name = "";
let description = "";
let publicType: PlaylistPublicTypeEnum = "NON_OPEN";
let initialize = true;

const playlistQuery = query<PlaylistQuery>(PlaylistDocument, {
  "fetchPolicy": "cache-first",
  "variables": { id }
});

// 初期化
$: if ($playlistQuery.data && initialize) {

  const playlist = $playlistQuery.data.playlist as Playlist;

  ({ name, description, publicType } = playlist);

  initialize = false;

}

const upsertPlaylist = mutation<unknown, UpsertPlaylistMutationVariables>(
  UpsertPlaylistDocument
);

const update = async () => {

  try {

    await upsertPlaylist({
      "variables": {
        "input": {
          description,
          name,
          "playlistId": id,
          publicType
        }
      }
    });

    modal.set(null);

  } catch (error) {
    // console.error({ error });
  }

};
</script>

<form on:submit|preventDefault>
  <label for="name"> 名前 </label>
  <input id="name" type="text" bind:value={name} />

  <label for="description"> 説明 </label>
  <input id="description" type="text" bind:value={description} />

  <label for="public-option">公開設定</label>
  <select id="public-option" bind:value={publicType}>
    <option value="NON_OPEN">非公開</option>
    <option value="OPEN">公開</option>
    <option value="ANONYMOUS_OPEN">匿名公開</option>
  </select>

  <button on:click={update}>保存</button>
</form>