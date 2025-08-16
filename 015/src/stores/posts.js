import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
    state: () => (
        { posts: [], page: 0 }
    ),

    actions: {
        fetchPosts(newPage = false) {
            if (newPage) {
                this.page++;
            }

            const baseUrl = "https://dummyapi.io/data/v1";
            fetch(`${baseUrl}/post?limit=5&page=${page}`, {
                "headers": {
                    "app-id": "657a3106698992f50c0a5885"
                }
            })
                .then(response => response.json())
                .then(result => {
                    posts.push(...result.data);
                })
        },

        removePost(postIndex) {
            this.posts.splice(postIndex, 1);
        }
    }
})
