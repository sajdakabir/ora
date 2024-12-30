export const up = async (db, client) => {
    // Update documents where effort is null and set it to "none"
    await db.collection('items').updateMany(
        { effort: null },
        { $set: { effort: "none" } }
    );
};

export const down = async (db, client) => {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
};
