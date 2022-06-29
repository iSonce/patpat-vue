import { GetForumPosts } from './ForumApi'          //论坛帖子列表
import { GetPostsByRelated } from './PostApi'       //关注用户/论坛帖子列表
import { GetPosts } from './UserApi'                //用户发布帖子列表  (order=3时为随机帖子列表)
import { GetLikePosts } from './PostApi'            //用户点赞的帖子列表
import { GetCollectPosts } from './PostApi'         //用户收藏的帖子列表
import { Search } from './SearchApi'                //搜索关键字得到的帖子列表


export async function GetPostsByOneApi(GetPostsType, data, headers) {
    switch (GetPostsType) {
        case 'post':
        case 'user':
            return GetPosts(data, headers)
        case 'forum':
            data.order = 0
            return GetForumPosts(data, headers)
        case 'related':
            return GetPostsByRelated(data, headers)
        case 'like':
            return GetLikePosts(data, headers)
        case 'collect':
            return GetCollectPosts(data, headers)
        case 'search':
            console.log('search')
            return Search(data, headers)
    }
}
