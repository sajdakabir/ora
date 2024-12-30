import { ItemActivityResponse } from "@/lib/types/Activity";
import { USER_WORKSPACE } from "@/utils/constants/api-endpoints";

export const getItemActivities = async (
  token: string,
  slug: string,
  space: string,
  itemId: string
) => {
  let response: Response;
  try {
    response = await fetch(
      USER_WORKSPACE + `/${slug}/spaces/${space}/items/${itemId}/history/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!response.ok) {
      return [];
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }

  const history = await response.json() as ItemActivityResponse;
  return history.response;
};
