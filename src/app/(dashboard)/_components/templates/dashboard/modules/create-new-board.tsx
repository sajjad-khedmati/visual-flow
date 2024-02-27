"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";

const formSchema = z.object({
  title: z
    .string()
    .nonempty({
      message: "title is required",
    })
    .min(4, {
      message: "Title must be at least 4 characters.",
    }),
});

export default function CreateNewBoard(): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const createNewBoard = useMutation(api.board.createNewBoard);

  const { organization } = useOrganization();

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    // TODO: submit new board with convex mutation api
    if (!organization) return;

    createNewBoard({
      title: values.title,
      orgId: organization.id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="boardy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter className="mt-4">
          <Button type="submit" size={"lg"}>
            Create Board
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
