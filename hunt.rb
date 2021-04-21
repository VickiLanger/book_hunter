require rand  # not super sure this is right

def get_prompts list
    prompt_data = File.open list  # get the file of prompts

    prompts = []  # start a list

    f = prompt_data.readlines  # grab a line
    prompt_data.append f  # add line to the list

    random_prompt = prompt_data.sample 8  # choose prompt at random without repeats

    prompt_data.close  # close the file

    puts random_prompt  # show the output
end

get_prompts 'prompts.txt'