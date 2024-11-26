"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const story_entity_1 = require("./entities/story.entity");
const comment_entity_1 = require("./entities/comment.entity");
const reaction_entity_1 = require("./entities/reaction.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'my_story_user',
    password: 'story',
    database: 'my_story_db',
    entities: [story_entity_1.Story, user_entity_1.User, comment_entity_1.Comment, reaction_entity_1.Reaction],
    synchronize: true,
});
//# sourceMappingURL=typeorm.config.js.map