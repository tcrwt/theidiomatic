interface IdiomSet {
  start1?: string;
  start2?: string;
  end1?: string;
  end2?: string;
}
const idioms: IdiomSet[] = [
  {
    start2: 'A fool and his money',
    end1: 'is easily parted',
    end2: 'are easily parted',
  },
  { start2: 'Accidents', end1: 'happens', end2: 'happen' },
  {
    start2: 'Actions',
    end1: 'speaks louder than words',
    end2: 'speak louder than words',
  },
  {
    start2: 'All good things',
    end1: 'must come to an end',
    end2: 'must come to an end',
  },
  { start2: 'All roads', end1: 'leads to Rome', end2: 'lead to Rome' },
  { start2: "All the world's a stage, and all the men and women" },
  {
    start1: 'All the world',
    end1: 'is a stage, and all the men and women merely players',
  },
  {
    start2: 'April showers',
    end2: 'bring May flowers',
  },
  { start2: 'Appearances', end1: 'can be deceiving', end2: 'can be deceiving' },
  { start2: 'Barking dogs', end1: 'seldom bites', end2: 'seldom bite' },
  { start2: 'Beggars', end1: "can't be a chooser", end2: "can't be choosers" },
  {
    start2: 'Birds of a feather',
    end1: 'flocks together',
    end2: 'flock together',
  },
  { start2: 'Boys', end1: 'will be boys', end2: 'will be boys' },
  { start2: 'Cheaters', end1: 'never prospers', end2: 'never prosper' },
  {
    start2: 'Clothes',
    end1: 'does not make the man',
    end2: 'do not make the man',
  },
  { start2: 'Comparisons', end1: 'is odious', end2: 'are odious' },
  { start2: 'Dead men', end1: 'tells no tales', end2: 'tell no tales' },
  {
    start2: 'First impressions',
    end1: 'is the most lasting',
    end2: 'are the most lasting',
  },
  {
    start2: 'Fools',
    end2: 'seldom differ',
  },
  {
    start2: 'God helps those who',
    end2: 'help themselves',
  },
  {
    start2: 'Good fences',
    end1: 'makes good neighbours',
    end2: 'make good neighbours',
  },
  {
    start2: 'Good things',
    end1: 'comes to those who wait',
    end2: 'come to those who wait',
  },
  {
    start2: 'Good things',
    end1: 'comes in small packages',
    end2: 'come in small packages',
  },
  {
    start2: 'Great minds',
    end2: 'think alike',
  },
  {
    start2: 'Great minds',
    end2: 'think alike, fools seldom differ',
  },
  {
    start2: 'Great minds think alike, fools',
    end2: 'seldom differ',
  },
  {
    start2: 'Little things',
    end1: 'pleases little minds',
    end2: 'please little minds',
  },
  { start2: 'Many drops', end1: 'makes a shower', end2: 'make a shower' },
  { start2: 'Many hands', end1: 'makes light work', end2: 'make light work' },
  { start2: 'Oil and water', end1: "doesn't mix", end2: "don't mix" },
  { start2: 'Only fools and horses', end1: 'works', end2: 'work' },
  { start2: 'Only the good', end1: 'dies young', end2: 'die young' },
  { end1: 'should do as the Romans do', end2: 'should do as the Romans do' },
  {
    start2: 'Those who live in glass houses',
    end1: "shouldn't throw stones",
    end2: "shouldn't throw stones",
  },
  {
    start2: 'Sticks and stones may break my bones, but words',
    end1: 'will never hurt me',
    end2: 'will never hurt me',
  },
  {
    start2: 'Sticks and stones',
    end1: 'may break my bones, but words will never hurt me',
    end2: 'may break my bones, but words will never hurt me',
  },
  { start2: 'The best things in life', end1: 'is free', end2: 'are free' },
  {
    start1: 'The eye',
    start2: 'The eyes',
    end1: 'is the window to the soul',
    end2: 'are the window to the soul',
  },
  {
    start2: 'The meek',
    end1: 'will inherit the earth',
    end2: 'will inherit the earth',
  },
  {
    start2: "Those who can, do; those who can't,",
    end2: 'teach',
  },
  { start2: "Those who don't learn from history" },
  {
    start2: 'Those who sleep with dogs',
    end1: 'will rise with fleas',
    end2: 'will rise with fleas',
  },
  {
    start2: 'Too many cooks',
    end1: 'spoils the broth',
    end2: 'spoil the broth',
  },
  {
    start2: 'Two heads',
    end1: 'is better than one',
    end2: 'are better than one',
  },
  {
    start2: 'Two wrongs',
    end1: "doesn't make a right",
    end2: "don't make a right",
  },
  { start2: 'The walls', end1: 'has ears', end2: 'have ears' },
  {
    start2: "When the cat's away the mice",
    end2: 'will play',
  },
  {
    start2: 'When the going gets tough, the tough',
    end2: 'get going',
  },
  { start2: 'Wonders', end1: 'will never cease', end2: 'will never cease' },
  { start2: 'Worse things', end1: 'happens at sea', end2: 'happen at sea' },
  {
    start1: 'A bad excuse',
    end1: 'is better than none',
    end2: 'are better than none',
  },
  {
    start1: 'A bad workman',
    end1: 'blames his tools',
    end2: 'blame their tools',
  },
  {
    start1: 'A bird in the hand',
    end1: 'is worth two in the bush',
    end2: 'are worth two in the bush',
  },
  {
    start1: 'A cat',
    end1: 'may look at a king',
    end2: 'may look at a king',
  },
  {
    start1: 'A cat',
    end1: 'has nine lives',
    end2: 'have nine lives',
  },
  {
    start1: 'A chain',
    end1: 'is only as strong as its weakest link',
    end2: 'are only as strong as their weakest link',
  },
  {
    start1: 'A change',
    end1: 'is as good as a rest',
    end2: 'are as good as a rest',
  },
  {
    start1: "A child that's born on the Sabbath day",
    end1: 'is fair and wise and good and gay',
  },
  {
    start1: 'A dog',
    end1: "is a man's best friend",
    end2: "are a man's best friend",
  },
  {
    start1: 'A drowning man',
    end1: 'will clutch at a straw',
    end2: 'will clutch at a straw',
  },
  { start1: 'A free lunch' },
  {
    start1: 'A friend in need',
    end1: 'is a friend indeed',
    end2: 'are a friend indeed',
  },
  {
    start1: 'A friend to everybody',
    end1: 'is a friend to nobody',
    end2: 'are a friend to nobody',
  },
  {
    start1: 'A friend who shares',
    end1: 'is a friend who cares',
  },
  {
    start1: "A friend's frown",
    end1: "is better than a fool's smile",
    end2: "are better than a fool's smile",
  },
  {
    start1: 'A gentle answer',
    end1: 'turns away wrath',
    end2: 'turn away wrath',
  },
  {
    start1: 'A golden key',
    end1: 'can open any door',
    end2: 'can open any door',
  },
  {
    start1: 'A good beginning',
    end1: 'makes a good ending',
    end2: 'make a good ending',
  },
  {
    start1: 'A good conscience',
    end1: 'is a soft pillow',
    end2: 'are a soft pillow',
  },
  {
    start1: 'A good husband',
    end1: 'makes a good wife',
    end2: 'make good wives',
  },
  {
    start1: 'A good man',
    end1: 'is hard to find',
    end2: 'are hard to find',
  },
  {
    start1: 'A good thing',
    end1: 'is soon snatched up',
    end2: 'are soon snatched up',
  },
  {
    start1: 'A harsh word',
    end1: 'stirs up anger',
    end2: 'stir up anger',
  },
  {
    start1: 'A house divided against itself',
    end1: 'cannot stand',
    end2: 'cannot stand',
  },
  {
    start1: 'A leopard',
    end1: "can't change its spots",
    end2: "can't change their spots",
  },
  {
    start1: 'A little knowledge',
    end1: 'is a dangerous thing',
    end2: 'are a dangerous thing',
  },
  {
    start1: 'A loveless life',
    end1: 'is a living death',
    end2: 'are a living death',
  },
  {
    start1: 'A man',
    end1: 'is known by the company he keeps',
    end2: 'are known by the company they keep',
  },
  {
    start1: 'A miss',
    end1: 'is as good as a mile',
    end2: 'are as good as a mile',
  },
  {
    start1: 'A nod',
    end1: 'is as good as a wink to a blind horse',
    end2: 'are as good as a wink to a blind horse',
  },
  {
    start1: 'A penny saved',
    end1: 'is a penny earned',
    end2: 'are a penny earned',
  },
  {
    start1: 'A picture',
    end1: 'is worth a thousand words',
    end2: 'are worth a thousand words',
  },
  {
    start1: 'A problem shared',
    end1: 'is a problem halved',
    end2: 'are a problem halved',
  },
  {
    start1: 'A red sky at night',
    end1: "is a shepherd's delight",
    end2: "are a shepherd's delight",
  },
  {
    start1: 'A red sky in the morning',
    end1: "is a shepherd's warning",
    end2: "are a shepherd's warning",
  },
  {
    start1: 'A rising tide',
    end1: 'lifts all boats',
    end2: 'lift all boats',
  },
  {
    start1: 'A rolling stone',
    end1: 'gathers no moss',
    end2: 'gather no moss',
  },
  {
    start1: 'A stitch in time',
    end1: 'saves nine',
    end2: 'save nine',
  },
  {
    start1: 'A spoonful of sugar',
    end1: 'helps the medicine go down',
    end2: 'help the medicine go down',
  },
  {
    start1: 'A thing of beauty',
    end1: 'is a joy forever',
    end2: 'are a joy forever',
  },
  {
    start1: 'A throne',
    end1: 'is only a bench covered in velvet',
    end2: 'are only a bench covered in velvet',
  },
  {
    start1: 'A volunteer',
    end1: 'is worth twenty pressed men',
    end2: 'are worth twenty pressed men',
  },
  {
    start1: 'A watched pot',
    end1: 'never boils',
    end2: 'never boil',
  },
  {
    start1: "A woman's place",
    end1: 'is in the home',
    end2: 'are in the home',
  },
  {
    start1: "A woman's work",
    end1: 'is never done',
    end2: 'are never done',
  },
  { start1: 'A word to the wise' },
  {
    start1: 'Absence',
    end1: 'makes the heart grow fonder',
    end2: 'make the heart grow fonder',
  },
  {
    start1: 'Power corrupts; absolute power',
    end1: 'corrupts absolutely',
    end2: 'corrupt absolutely',
  },
  {
    start1: 'Adversity',
    end1: 'makes strange bedfellows',
    end2: 'make strange bedfellows',
  },
  {
    start1: 'All publicity',
    end1: 'is good publicity',
    end2: 'are good publicity',
  },
  {
    start1: 'All that glitters',
    end1: 'is not gold',
    end2: 'are not gold',
  },
  {
    start1: 'All the world',
    end1: 'loves a lover',
    end2: 'love a lover',
  },
  {
    start1: 'All work and no play',
    end1: 'makes Jack a dull boy',
    end2: 'make Jack a dull boy',
  },
  {
    start1: 'All you need',
    end1: 'is love',
    end2: 'are love',
  },
  {
    start1: 'An apple a day',
    end1: 'keeps the doctor away',
    end2: 'keep the doctor away',
  },
  {
    start1: 'An army',
    end1: 'marches on its stomach',
    end2: 'march on their stomach',
  },
  {
    start1: 'An elephant',
    end1: 'never forgets',
    end2: 'never forget',
  },
  {
    start1: 'An empty barrel',
    end1: 'makes the most noise',
    end2: 'make the most noise',
  },
  {
    start1: "An Englishman's home",
    end1: 'is his castle',
    end2: 'are their castle',
  },
  {
    start1: 'An onion a day',
    end1: 'keeps everyone away',
    end2: 'keep everyone away',
  },
  {
    start1: 'An ounce of prevention',
    end1: 'is worth a pound of cure',
    end2: 'are worth a pound of cure',
  },
  {
    start1: 'Attack',
    end1: 'is the best form of defence',
    end2: 'are the best form of defence',
  },
  {
    start1: 'Beauty',
    end1: 'is in the eye of the beholder',
    end2: 'are in the eye of the beholder',
  },
  {
    start1: 'Beauty',
    end1: 'is only skin deep',
    end2: 'are only skin deep',
  },
  {
    start1: 'Blood',
    end1: 'is thicker than water',
    end2: 'are thicker than water',
  },
  {
    start1: 'Bread',
    end1: 'always falls buttered side down',
    end2: 'always fall buttered side down',
  },
  {
    start1: 'Brevity',
    end1: 'is the soul of wit',
    end2: 'are the soul of wit',
  },
  {
    start1: 'Charity',
    end1: 'begins at home',
    end2: 'begin at home',
  },
  {
    start1: 'Cleanliness',
    end1: 'is next to godliness',
    end2: 'are next to godliness',
  },
  {
    start1: 'Crime',
    end1: "doesn't pay",
    end2: "don't pay",
  },
  {
    start1: 'Crying over spilt milk',
    end1: 'is no use',
    end2: 'are no use',
  },
  {
    start1: 'Curiosity',
    end1: 'killed the cat',
    end2: 'killed the cat',
  },
  {
    start1: 'Diligence',
    end1: 'is the mother of good luck',
    end2: 'are the mother of good luck',
  },
  {
    start1: 'Discretion',
    end1: 'is the better part of valour',
    end2: 'are the better part of valour',
  },
  { start1: "Don't bite the hand that" },
  {
    start1: 'Erring',
    end1: 'is human',
  },
  {
    start1: 'Every cloud',
    end1: 'has a silver lining',
    end2: 'have a silver lining',
  },
  {
    start1: 'Every dog',
    end1: 'has its day',
    end2: 'have their day',
  },
  {
    start1: 'Every man',
    end1: 'is the architect of his destiny',
    end2: 'are the architect of their destiny',
  },
  {
    start1: 'Every man',
    end1: 'has his price',
    end2: 'have their price',
  },
  {
    start1: 'Every picture',
    end1: 'tells a story',
    end2: 'tell a story',
  },
  {
    start1: 'Experience',
    end1: 'is the father of wisdom',
    end2: 'are the father of wisdom',
  },
  {
    start1: 'Failing to plan',
    end1: 'is planning to fail',
    end2: 'are planning to fail',
  },
  {
    start1: 'Faint heart',
    end1: 'never won fair lady',
    end2: 'never won fair ladies',
  },
  {
    start1: 'Fair exchange',
    end1: 'is no robbery',
    end2: 'are no robbery',
  },
  {
    start1: 'Faith',
    end1: 'will move mountains',
    end2: 'will move no mountains',
  },
  {
    start1: 'Familiarity',
    end1: 'breeds contempt',
    end2: 'breed contempt',
  },
  {
    start1: 'Flattery',
    end1: 'will get you nowhere',
    end2: 'will get you nowhere',
  },
  {
    start1: 'Fortune',
    end1: 'favours the brave',
    end2: 'favour the brave',
  },
  {
    start1: "Friday's child",
    end1: 'is loving and giving',
  },
  {
    start1: 'Giving',
    end1: 'is better than receiving',
    end2: 'are better than receiving',
  },
  {
    start1: 'Good talk',
    end1: 'saves the food',
    end2: 'save the food',
  },
  {
    start1: 'Half a loaf',
    end1: 'is better than no bread',
    end2: 'are better than no bread',
  },
  {
    start1: 'Handsome',
    end1: 'is as handsome does',
    end2: 'are as handsome does',
  },
  {
    start1: 'He has enough who',
    end1: 'is content',
    end2: 'are content',
  },
  {
    start1: 'He is rich who',
    end1: 'is satisfied',
    end2: 'are satisfied',
  },
  {
    start1: 'He who fights and runs away',
    end1: 'lives to fight another day',
    end2: 'live to fight another day',
  },
  {
    start1: 'He who hesitates',
    end1: 'is lost',
    end2: 'are lost',
  },
  {
    start1: 'He who laughs last',
    end1: 'laughs longest',
    end2: 'laugh longest',
  },
  {
    start1: 'He who lives by the sword',
    end1: 'shall die by the sword',
    end2: 'shall die by the sword',
  },
  {
    start1: 'Hindsight',
    end1: 'is always twenty-twenty',
    end2: 'are always twenty-twenty',
  },
  {
    start1: 'History',
    end1: 'repeats itself',
  },
  {
    start1: 'Home',
    end1: 'is where the heart is',
    end2: 'are where the heart is',
  },
  {
    start1: 'Honesty',
    end1: 'is the best policy',
    end2: 'are the best policy',
  },
  {
    start1: 'If a job is worth doing it',
    end1: 'is worth doing well',
    end2: 'are worth doing well',
  },
  {
    start1: 'Ignorance',
    end1: 'is bliss',
    end2: 'are bliss',
  },
  {
    start1: 'Imitation',
    end1: 'is the sincerest form of flattery',
    end2: 'are the sincerest form of flattery',
  },
  {
    start1: 'In the kingdom of the blind, the one-eyed man',
    end1: 'is king',
  },
  {
    start1: 'It never rains, but it',
    end1: 'pours',
    end2: 'pour',
  },
  {
    start1: 'Knowledge',
    end1: 'is power',
    end2: 'are power',
  },
  {
    start1: 'Laughter',
    end1: 'is the best medicine',
    end2: 'are the best medicine',
  },
  {
    start1: 'Life',
    end1: 'begins at forty',
    end2: 'begin at forty',
  },
  { end1: 'is just a bowl of cherries', end2: 'are just a bowl of cherries' },
  { end1: "is like a box of chocolates. You never know what you're gonna get" },
  { end1: "is what happens to you while you're busy making other plans" },
  {
    start1: 'Lightning',
    end1: 'never strikes twice',
    end2: 'never strike twice',
  },
  {
    start1: 'Lost time',
    end1: 'is never found again',
    end2: 'are never found again',
  },
  {
    start1: 'Love',
    end1: 'is blind',
    end2: 'are blind',
  },
  {
    start1: 'Misery',
    end1: 'loves company',
    end2: 'love company',
  },
  {
    start1: "Monday's child",
    end1: 'is fair of face',
  },
  {
    start1: 'Money',
    end1: 'talks',
  },
  {
    start1: 'Money',
    end1: "doesn't grow on trees",
    end2: "don't grow on trees",
  },
  { end1: 'makes the world go round', end2: 'make the world go round' },
  {
    start1: 'Money, money, money',
    end1: "must be funny in the rich man's world",
    end2: "must be funny in the rich man's world",
  },
  { end1: "can't buy happiness", end2: "can't buy happiness" },
  { end1: "can't buy me love", end2: "can't buy me love" },
  {
    start1: 'Music',
    end1: 'has charms to soothe the savage breast',
    end2: 'have charms to soothe the savage breast',
  },
  {
    start1: 'Necessity',
    end1: 'is the mother of invention',
    end2: 'are the mothers of invention',
  },
  {
    start1: 'No good deed',
    end1: 'goes unpunished',
    end2: 'go unpunished',
  },
  {
    start1: 'No man',
    end1: 'is an island',
    end2: 'are islands',
  },
  {
    start1: 'No man',
    end1: 'can serve two masters',
    end2: 'can serve two masters',
  },
  {
    start1: 'No news',
    end1: 'is good news',
    end2: 'are good news',
  },
  {
    start1: 'One good turn',
    end1: 'deserves another',
    end2: 'deserve another',
  },
  {
    start1: "One man's junk",
    end1: "is another man's treasure",
    end2: "are another man's treasure",
  },
  {
    start1: "One man's meat",
    end1: "is another man's poison",
    end2: "are another man's poison",
  },
  {
    start1: "One man's terrorist",
    end1: "is another man's freedom fighter",
  },
  {
    start1: 'One swallow',
    end1: 'does not make a summer',
    end2: 'do not make a summer',
  },
  {
    start1: 'Opportunity',
    end1: 'never knocks twice',
    end2: 'never knock twice',
  },
  {
    start1: 'Patience',
    end1: 'is a virtue',
  },
  {
    start1: 'Possession',
    end1: 'is nine-tenths of the law',
    end2: 'are nine-tenths of the law',
  },
  {
    start1: 'Practice',
    end1: 'makes perfect',
    end2: 'make perfect',
  },
  {
    start1: 'Pride',
    end1: 'comes before a fall',
    end2: 'come before a fall',
  },
  {
    start1: 'Procrastination',
    end1: 'is the thief of time',
    end2: 'are the thieves of time',
  },
  {
    start1: 'Revenge',
    end1: 'is a dish best served cold',
    end2: 'are a dish best served cold',
  },
  {
    start1: 'Revenge',
    end1: 'is sweet',
    end2: 'are sweet',
  },
  {
    start1: 'Rome',
    end1: "wasn't built in a day",
    end2: "weren't built in a day",
  },
  {
    start1: "Saturday's child",
    end1: 'works hard for its living',
  },
  {
    start1: 'Seeing',
    end1: 'is believing',
    end2: 'are believing',
  },
  {
    start1: 'Silence',
    end1: 'is golden',
    end2: 'are golden',
  },
  {
    start1: 'Speak of the devil and he',
    end1: 'is bound to appear',
    end2: 'are bound to appear',
  },
  {
    start1: 'Strike while the iron',
    end1: 'is hot',
    end2: 'are hot',
  },
  {
    start1: 'Success has many fathers, while failure',
    end1: 'is an orphan',
    end2: 'are orphans',
  },
  {
    start1: 'Talk',
    end1: 'is cheap',
    end2: 'are cheap',
  },
  {
    start1: 'That which does not kill us',
    end1: 'makes us stronger',
    end2: 'make us stronger',
  },
  {
    start1: 'The apple',
    end1: "doesn't fall far from the tree",
    end2: "don't fall far from the tree",
  },
  {
    start1: 'The bottom line',
    end1: 'is the bottom line',
    end2: 'are the bottom line',
  },
  {
    start1: 'The cake',
    end1: 'is a lie',
    end2: 'are a lie',
  },
  {
    start1: 'The cobbler',
    end1: 'always wears the worst shoes',
    end2: 'always wear the worst shoes',
  },
  {
    start1: 'The course of true love',
    end1: 'never did run smooth',
    end2: 'never did run smooth',
  },
  {
    start1: 'The customer',
    end1: 'is always right',
    end2: 'are always right',
  },
  {
    start1: 'The darkest hour',
    end1: 'is just before the dawn',
    end2: 'are just before the dawn',
  },
  {
    start1: 'The devil',
    end1: 'finds work for idle hands',
    end2: 'find work for idle hands',
  },
  {
    start1: 'The devil you know',
    end1: "is better than the devil you don't",
  },
  {
    start1: 'The early bird',
    end1: 'catches the worm',
    end2: 'catch the worm',
  },
  {
    start1: 'The end',
    end1: 'justifies the means',
    end2: 'justify the means',
  },
  {
    start1: 'The enemy of my enemy',
    end1: 'is my friend',
  },
  {
    start1: 'The forbidden fruit',
    end1: 'is the sweetest fruit',
    end2: 'are the sweetest fruits',
  },
  {
    start1: 'The grass',
    end1: 'is always greener on the other side',
    end2: 'are always greener on the other side',
  },
  {
    start1: 'The hand that rocks the cradle',
    end1: 'rules the world',
    end2: 'rule the world',
  },
  {
    start1: 'The husband',
    end1: 'is always the last to know',
    end2: 'are always the last to know',
  },
  {
    start1: 'The last straw',
    end1: "breaks the camel's back",
    end2: "break the camel's back",
  },
  {
    start1: 'The longest journey',
    end1: 'starts with a single step',
    end2: 'start with a single step',
  },
  {
    start1: 'The love of money',
    end1: 'is the root of all evil',
    end2: 'are the root of all evil',
  },
  { end1: 'is a root of all kinds of evil' },
  {
    start1: 'The pen',
    end1: 'is mightier than the sword',
    end2: 'are mightier than the sword',
  },
  {
    start1: 'The pot',
    end1: 'calls the kettle black',
    end2: 'call the kettle black',
  },
  {
    start1: 'The proof of the pudding',
    end1: 'is in the eating',
    end2: 'are in the eating',
  },
  {
    start1: 'The proof',
    end1: 'is in the pudding',
    end2: 'are in the pudding',
  },
  {
    start1: 'The road to hell',
    end1: 'is paved with good intentions',
    end2: 'are paved with good intentions',
  },
  {
    start1: 'The second mouse',
    end1: 'gets the cheese',
    end2: 'get the cheese',
  },
  {
    start1: 'The sleeping fox',
    end1: 'catches no chickens',
    end2: 'catch no chickens',
  },
  {
    start1: 'The spirit is willing, but the flesh',
    end1: 'is weak',
    end2: 'are weak',
  },
  {
    start1: 'The squeaky wheel',
    end1: 'gets the grease',
    end2: 'get the grease',
  },
  {
    start1: 'The truth',
    end1: 'will out',
  },
  {
    start1: "The way to a man's heart",
    end1: 'is through his stomach',
  },
  {
    start1: 'The world',
    end1: 'is your oyster',
    end2: 'are your oyster',
  },
  {
    start1: "Thursday's child",
    end1: 'has far to go',
  },
  {
    start1: 'Time',
    end1: "flies when you're having fun",
  },
  {
    start1: 'Tomorrow',
    end1: 'is a new day',
    end2: 'are a new day',
  },
  {
    start1: 'Live for today, for tomorrow',
    end1: 'never comes',
    end2: 'never come',
  },
  {
    start1: 'True beauty',
    end1: 'lies within',
    end2: 'lie within',
  },
  {
    start1: 'Truth',
    end1: 'is stranger than fiction',
    end2: 'are stranger than fiction',
  },
  {
    start1: "Tuesday's child",
    end1: 'is full of grace',
  },
  {
    start1: 'Two is company, but three',
    end1: 'is company, but three is a crowd',
    end2: 'are company, but three is a crowd',
  },
  {
    start1: 'Variety',
    end1: 'is the spice of life',
    end2: 'are the spice of life',
  },
  {
    start1: 'Virtue',
    end1: 'is its own reward',
  },
  {
    start1: "Wednesday's child",
    end1: 'is full of woe',
  },
  {
    start1: "What can't be cured",
    end1: 'must be endured',
    end2: 'must be endured',
  },
  {
    start1: 'What goes up',
    end1: 'must come down',
    end2: 'must come down',
  },
  {
    start1: "What's good for the goose",
    end1: 'is good for the gander',
    end2: 'are good for the gander',
  },
  {
    start1: "What doesn't kill you",
    end1: 'makes you stronger',
  },
  {
    start1: 'What happens in Vegas',
    end1: 'stays in Vegas',
  },
  {
    start1: 'What you see',
    end1: 'is what you get',
  },
  {
    start1: 'Who dares',
    end1: 'wins',
    end2: 'win',
  },
  {
    start1: 'Worrying',
    end1: 'never did anyone any good',
    end2: 'never did anyone any good',
  },
  {
    start1: 'Youth',
    end1: 'is wasted on the young',
    end2: 'are wasted on the young',
  },
  { end1: 'is the new black', end2: 'are the new black' },
  { end1: 'is fair in love and war', end2: 'are fair in love and war' },
  { end1: 'cannot live by bread alone', end2: 'cannot live by bread alone' },
  {
    end1: 'makes a man healthy, wealthy and wise',
    end2: 'make a man healthy, wealthy and wise',
  },
  { end1: 'is well that ends well', end2: 'are well that end well' },
  { end1: 'is what you make it', end2: 'are what you make them' },
  {
    start1: 'A journey of a thousand miles',
    end1: 'begins with a single step',
    end2: 'begin with a single step',
  },
  {
    start1: 'A man with a hammer',
    end1: 'sees every problem as a nail',
    end2: 'see every problem as a nail',
  },
  {
    start1: 'A man who is his own lawyer',
    end1: 'has a fool for a client',
    end2: 'have a fool for a client',
  },
  {
    start1: 'Careless talk',
    end1: 'costs lives',
    end2: 'cost lives',
  },
  {
    start1: 'Courage is the measure of a man, beauty',
    end1: 'is the measure of a woman',
    end2: 'are the measure of a woman',
  },
  {
    end1: "shouldn't bite the hand that feeds you",
    end2: "shouldn't bite the hand that feeds them",
  },
  {
    end1: "shouldn't cry over spilt milk",
    end2: "shouldn't cry over spilt milk",
  },
  {
    end1: "shouldn't count your chickens before they are hatched",
    end2: "shouldn't count their chickens before they are hatched",
  },
  {
    end1: "shouldn't cross the bridge till you come to it",
    end2: "shouldn't cross the bridge till they come to it",
  },
  {
    end1: "shouldn't cut off your nose to spite your face",
    end2: "shouldn't cut off their nose to spite their face",
  },
  { end2: "shouldn't keep a dog and bark themselves" },
  {
    end1: 'should never look a gift horse in the mouth',
    end2: 'should never look a gift horse in the mouth',
  },
  { end2: "shouldn't put all their eggs in one basket" },
  { end1: "shouldn't rock the boat", end2: "shouldn't rock the boat" },
  { end2: "can't walk before they can crawl" },
  {
    start1: 'Doubt',
    end1: 'is the beginning of wisdom',
    end2: 'are the beginning of wisdom',
  },
  { end1: 'is enough', end2: 'are enough' },
  {
    start1: 'The fear of the Lord',
    end1: 'is the beginning of wisdom',
    end2: 'are the beginning of wisdom',
  },
  { start1: 'East is east, and west' },
  { end2: 'rush in where angels fear to tread' },
  {
    start1: 'Give him an inch and he',
    end1: 'will take a mile',
    end2: 'will take a mile',
  },
  {
    start1: 'Give a man a fish and he',
    end1: 'will eat for a day',
    end2: 'will eat for a day',
  },
  {
    start1: 'Give a man a fish and he will eat for a day; teach him to fish and he',
    end1: 'will eat for a lifetime',
    end2: 'will eat for a lifetime',
  },
  {
    start1: 'Give a man enough rope and he',
    end1: 'will hang himself',
    end2: 'will hang themselves',
  },
  {
    start1: 'He that goes a-borrowing,',
    end1: 'goes a-sorrowing',
    end2: 'go a-sorrowing',
  },
  {
    start1: 'He who pays the piper',
    end1: 'calls the tune',
    end2: 'call the tune',
  },
  {
    start1: 'He who knows, does not speak. He who speaks,',
    end1: 'does not know',
    end2: 'do not know',
  },
  {
    start1: 'Hell',
    end1: 'hath no fury like a woman scorned',
    end2: 'have no fury like a woman scorned',
  },
  { start1: 'If anything can go wrong, it' },
  {
    start2: 'If you pay peanuts, you',
    end1: 'gets monkeys',
    end2: 'get monkeys',
  },
  {
    start2: 'When life gives you lemons, you',
    end1: 'makes lemonade',
    end2: 'make lemonade',
  },
  {
    start2: "If you can't stand the heat, you",
    end1: 'gets out of the kitchen',
    end2: 'get out of the kitchen',
  },
  {
    start1: 'Knowledge is power, France',
    end1: 'is bacon',
    end2: 'are bacon',
  },
  {
    start2: 'Laugh and the world laughs with you; weep and you',
    end1: 'weeps alone',
    end2: 'weep alone',
  },
  {
    start1: 'Many a true word',
    end1: 'is spoken in jest',
    end2: 'are spoken in jest',
  },
  {
    end1: 'comes in like a lion and goes out like a lamb',
    end2: 'come in like a lion and go out like a lamb',
  },
  {
    start1: 'March comes in like a lion and',
    end1: 'goes out like a lamb',
    end2: 'go out like a lamb',
  },
  {
    start1: 'The rain in Spain',
    end1: 'falls mainly on the plain',
    end2: 'fall mainly on the plain',
  },
  {
    start1: 'When clouds look like black smoke, a wise man',
    end1: 'will put on his cloak',
  },
  { start1: 'When one door closes, another door' },
  {
    start1: 'Nature',
    end1: 'abhors a vacuum',
    end2: 'abhor a vacuum',
  },
  {
    end1: 'should never judge a book by its cover',
    end2: 'should never judge a book by its cover',
  },
  { end1: 'should never say never', end2: 'should never say never' },
  { end1: 'is certain, except death and taxes' },
  {
    start1: 'One hand',
    end1: 'washes the other',
  },
  {
    start1: 'Slow and steady',
    end1: 'wins the race',
    end2: 'win the race',
  },
  {
    start1: 'Stupid',
    end1: 'is as stupid does',
  },
  {
    start2: 'If you spare the rod, you',
    end2: 'spoil the child',
  },
  {
    start2: 'Take care of the pence, and the pounds',
    end2: 'will take care of themselves',
  },
  {
    start1: 'The best defence',
    end1: 'is a good offence',
    end2: 'are a good offence',
  },
  { end1: 'is money', end2: 'are money' },
  { end1: 'is born every minute', end2: 'are born every minute' },
  {
    start1: 'Hatred',
    end1: 'is as blind as love',
    end2: 'are as blind as love',
  },
  {
    start1: 'God',
    end1: 'loves a cheerful giver',
  },
  { end1: 'is a thin line between love and hate' },
  {
    start1: 'No man or woman is worth your tears, and the one who is',
    end1: "won't make you cry",
    end2: "won't make you cry",
  },
  {
    start1: 'A bully',
    end1: 'is always a coward',
    end2: 'are always a coward',
  },
  {
    start1: 'A handsome shoe',
    end1: 'often pinches the foot',
    end2: 'often pinch the foot',
  },
  { end2: 'are what you eat' },
  {
    start1: 'No wise man',
    end1: 'wishes to be younger',
  },
  { end1: 'is worse than his bite', end2: 'are worse than his bite' },
  { start1: 'Make hay while the sun' },
  {
    start1: 'A small spark',
    end1: 'can start a great fire',
    end2: 'can start a great fire',
  },
  {
    start1: 'A single penny, fairly got,',
    end1: 'is worth a thousand that are not',
  },
  {
    start2: 'Diamonds',
    end1: "is a girl's best friend",
    end2: "are a girl's best friend",
  },
  { end1: 'burns a hole in your pocket', end2: 'burn a hole in your pocket' },
  {
    start2: 'Rules',
    end1: 'is made to be broken',
    end2: 'are made to be broken',
  },
  {
    start1: 'He who can, does. He who cannot,',
    start2: 'Those who can, do. Those who cannot,',
    end1: 'teaches',
    end2: 'teach',
  },
  {
    start1: 'A verbal contract',
    start2: 'Verbal contracts',
    end1: "isn't worth the paper it's written on",
    end2: "aren't worth the paper they're written on",
  },
  {
    start2: 'All cats',
    end2: 'love fish but hate to get their paws wet',
  },
  {
    start1: 'Ask me no questions, I',
    end1: 'will tell you no lies',
    end2: 'will tell you no lies',
  },
  {
    start1: 'A broken clock',
    end1: 'is right two times a day',
    end2: 'are right two times a day',
  },
  {
    start1: 'The calm',
    end1: 'comes before the storm',
    end2: 'come before the storm',
  },
  {
    start2: 'Desperate times',
    end1: 'calls for desperate measures',
    end2: 'call for desperate measures',
  },
  {
    start1: 'Every rose',
    end1: 'has its thorn',
  },
  {
    start1: 'The exception',
    end1: 'proves the rule',
  },
  {
    start1: 'Fifty percent of something',
    end1: 'is better than one hundred percent of nothing',
  },
  {
    start2: 'Fine words',
    end1: 'butters no parsnips',
    end2: 'butter no parsnips',
  },
  { end1: "ain't broke, don't fix it" },
  { end1: 'seems to good to be true, it probably is' },
  {
    start2: 'If wishes were horses, beggars',
    end2: 'would ride',
  },
  {
    start2: "If you aren't part of the solution, you",
    end2: 'are part of the problem',
  },
  { end1: "isn't over until the fat lady sings" },
  {
    start1: 'Insanity',
    end1: 'is doing the same thing over and over, and expecting different results',
  },
  { end1: 'is always darkest before the dawn' },
  {
    end1: 'is better to be silent and thought a fool, than to speak up and remove all doubt',
  },
  {
    start1: 'A lie can be halfway around the world before the truth',
    end1: 'gets its boots on',
  },
  {
    start2: 'The more things change, the more they',
    end2: 'stay the same',
  },
  {
    start2: 'There are none so blind as they who',
    end2: 'will not see',
  },
  {
    start1: 'One rotten apple',
    end1: 'will spoil the whole barrel',
  },
  {
    start2: 'Smile, and the world smiles with you; cry, and you',
    end2: 'cry alone',
  },
  {
    start1: 'Smile, and the world',
    end1: 'smiles with you; cry, and you cry alone',
  },
  {
    start1: 'This, too,',
    end1: 'shall pass',
  },
  {
    end1: 'has nothing to fear but fear itself',
    end2: 'have nothing to fear but fear itself',
  },
  {
    start1: 'A woman',
    end1: "is like a tea bag; you'll never know how strong she is until she's in hot water",
  },
  {
    start1: 'As a dog returns to his vomit, so a fool',
    end1: 'returns to his folly',
  },
  { start2: 'Finders keepers; losers' },
  { end1: 'is one percent inspiration, ninety-nine percent perspiration' },
  {
    start1: 'Honey',
    end1: 'catches more flies than vinegar',
  },
  {
    start1: 'Justice delayed',
    end1: 'is justice denied',
  },
  {
    start2: 'Snitches',
    end2: 'get stitches',
  },
  {
    start2: 'The best laid plans of mice and men',
    end2: 'often go awry',
  },
  { start2: 'The bigger they are, the harder they' },
];

const start1: string[] = [],
  start2: string[] = [],
  end1: string[] = [],
  end2: string[] = [];

idioms.forEach((idiom: IdiomSet) => {
  idiom.start1 && start1.push(idiom.start1);
  idiom.start2 && start2.push(idiom.start2);
  idiom.end1 && end1.push(idiom.end1);
  idiom.end2 && end2.push(idiom.end2);
});

// decide on singular or plural
const choosePlural = (): boolean => {
  const ratioSingularToPlural = 4;
  const flip = Math.floor(Math.random() * (ratioSingularToPlural + 1));
  return flip === 1;
};

// choose a random element from an array
const randomFromArray = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// generate an idiom
export const generateIdiom = (): string => {
  const plural = choosePlural();
  return plural
    ? `${randomFromArray(start2)} ${randomFromArray(end2)}.`
    : `${randomFromArray(start1)} ${randomFromArray(end1)}.`;
};
