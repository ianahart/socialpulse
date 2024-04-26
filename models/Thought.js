const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: {
    type: String,
    required: [true, 'A body reaction body is required'],
    maxlength: 280,
  },

  username: {
    type: String,
    required: [true, 'A username is required'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (ts) => dayjs(ts).format('MM/DD/YYYY h:mma'),
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      Type: String,
      required: [true, 'A thought text is required'],
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (ts) => dayjs(ts).format('MM/DD/YYYY h:mma'),
    },

    username: {
      type: String,
      required: [true, ' A username is required'],
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
