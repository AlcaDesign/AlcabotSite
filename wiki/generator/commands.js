module.exports = [
		{
				name: 'Followers',
				perm: false,
				grou: 'follows',
				para: [
						{
								name: 'Channel',
								perm: 'mod',
								requ: false,
								type: 'string'
							}
					],
				desc: 'Gets the total amount of followers for an account.',
				exam: [
						{
								desc: 'Checking this channel',
								inpu: ['!followers'],
								outp: '`Alca` has 161 followers.'
							},
						{
								desc: 'Checking another channel with a goal set',
								inpu: ['!followers', 'Thanks4TheDome'],
								outp: 'Thanks4TheDome has 17,348 followers. ' +
									'2,652 to go until 20,000 followers!'
							}
					],
				alia: ['Follows','FollowCount','FollowerCount']
			},
		{
				name: 'LastFollowers',
				perm: false,
				grou: 'follows',
				para: [
						{
								name: 'Channel',
								perm: 'mod',
								requ: false,
								type: 'string'
							}
					],
				desc: 'Gets the last 10 followers for an account.',
				exam: [
						{
								desc: 'Checking this channel',
								inpu: ['!followers'],
								outp: '`Alca\'s` last 10 followers: squilibob, KlumaAK1, ..., Califo, Premiumdazed_.'
							},
						{
								desc: 'Checking another channel',
								inpu: ['!followers', 'Thanks4TheDome'],
								outp: 'Thanks4TheDome\'s last 10 followers: Cwazy_3la2oo, robby345, ..., JabbyBoyy, cryptochroma.'
							}
					],
				alia: ['LastFollower','RecentFollowers','RecentFollower']
			},
		{
				name: 'Following',
				perm: 'sub',
				grou: 'follows',
				para: [
						{
								name: 'Username',
								perm: 'mod',
								requ: false,
								type: 'string'
							},
						{
								name: 'Channel',
								perm: 'mod',
								requ: false,
								type: 'string'
							}
					],
				desc: 'Check if someone is following a channel.',
				exam: [
						{
								desc: 'Checking self in this channel (subs)',
								inpu: ['!following'],
								outp: '`Alca`, you followed 1y 122d 12h 13m 52s ago.'
							},
						{
								desc: 'Checking another person',
								inpu: ['!following', 'Thanks4TheDome'],
								outp: 'Thanks4TheDome is not following.'
							},
						{
								desc: 'Checking self in another channel',
								inpu: ['!following', 'me', 'johnnyvito'],
								outp: '`Alca`, you followed JohnnyVITO 318d 15h 0m 35s ago..'
							},
						{
								desc: 'Checking another person in another channel',
								inpu: ['!following', 'johnnyvito', 'thanks4thedome'],
								outp: 'JohnnyVITO followed Thanks4TheDome 1y 226d 17h 24m 30s ago.'
							}
					],
				alia: ['IsFollowing','Followed']
			}
	];
