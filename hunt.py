import random

# todo: make sure all options are different, no repeats
# idea: add in other lists for genres and tropes
# idea: grab 1 from genres.txt, 2 from tropes.txt, rest from prompts.txt


def get_prompts(list):

    prompt_data = open(list)  # get the file of prompts

    prompts = []  # start a list

    for line in prompt_data:
        new_line = line.rstrip()  # grab a line
        prompts.append(new_line)  # add line to the list

    prompt_data.close()  # close the file

    random_prompt = random.choice(prompts)  # choose prompt at random

    print(random_prompt)


get_prompts('prompts.txt')
get_prompts('prompts.txt')
get_prompts('tropes.txt')  # include 2 trope
get_prompts('prompts.txt')
get_prompts('prompts.txt')
get_prompts('prompts.txt')
get_prompts('genres.txt')  # include 1 genre
get_prompts('prompts.txt')
get_prompts('prompts.txt')
get_prompts('tropes.txt')  # include 2 trope
